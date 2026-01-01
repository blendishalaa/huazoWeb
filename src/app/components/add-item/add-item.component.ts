import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { translations, Translations } from '../../services/translations';
import { Subscription, switchMap } from 'rxjs';
import { ItemsService, CreateItemRequest } from '../../services/items.service';
import { AuthService } from '../../services/auth.service';
import { CategoriesService, Category } from '../../services/categories.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})
export class AddItemComponent implements OnInit, OnDestroy {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  
  currentLanguage: 'sq' | 'en' = 'sq';
  translations: Translations = translations['sq'];
  private languageSubscription?: Subscription;
  isSubmitting = false;
  categories: Category[] = [];
  selectedCategoryIds: string[] = [];

  itemData = {
    photos: [] as File[],
    photoPreviews: [] as string[],
    name: '',
    description: '',
    pricing: '',
    size: '',
    brand: '',
    condition: '',
    deposit: '',
    categoryId: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postalCode: ''
  };

  submitted = false;
  errorMessage = '';

  conditionOptions = [
    { value: 'new', label: 'New' },
    { value: 'like-new', label: 'Like New' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' }
  ];

  constructor(
    private languageService: LanguageService,
    private itemsService: ItemsService,
    private authService: AuthService,
    private categoriesService: CategoriesService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.updateTranslations();
    
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.updateTranslations();
    });

    this.categoriesService.getCategories().subscribe({
      next: (resp: any) => {
        if (Array.isArray(resp)) {
          this.categories = resp;
        } else if (resp?.data) {
          this.categories = resp.data;
        } else if ((resp as any)?.categories) {
          this.categories = (resp as any).categories;
        }
      },
      error: (error: unknown) => console.error('Failed to load categories', error)
    });

    this.userService.getProfile().subscribe({
      next: (resp: any) => {
        const profile = (resp as any)?.data || resp;
        const loc = profile?.location;
        if (loc) {
          this.itemData.address = loc.address || this.itemData.address;
          this.itemData.city = loc.city || this.itemData.city;
          this.itemData.state = loc.state || this.itemData.state;
          this.itemData.country = loc.country || this.itemData.country;
          this.itemData.postalCode = loc.postalCode || this.itemData.postalCode;
        } else {
          this.applyDefaultLocation();
        }
      },
      error: (error: unknown) => {
        console.error('Failed to load profile for location', error);
        this.applyDefaultLocation();
      }
    });
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
  }

  updateTranslations() {
    this.translations = translations[this.currentLanguage];
    // Update condition options labels
    this.conditionOptions = [
      { value: 'new', label: this.translations.addItem?.conditionNew || 'New' },
      { value: 'like-new', label: this.translations.addItem?.conditionLikeNew || 'Like New' },
      { value: 'good', label: this.translations.addItem?.conditionGood || 'Good' },
      { value: 'fair', label: this.translations.addItem?.conditionFair || 'Fair' }
    ];
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files);
      
      files.forEach(file => {
        if (file.type.startsWith('image/')) {
          this.itemData.photos.push(file);
          
          // Create preview
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.itemData.photoPreviews.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      });
    }
  }

  removePhoto(index: number) {
    this.itemData.photos.splice(index, 1);
    this.itemData.photoPreviews.splice(index, 1);
  }

  closeModal() {
    this.close.emit();
    this.resetForm();
  }

  resetForm() {
    this.itemData = {
      photos: [],
      photoPreviews: [],
      name: '',
      description: '',
      pricing: '',
      size: '',
      brand: '',
      condition: '',
      deposit: '',
      categoryId: '',
      address: '',
      city: '',
      state: '',
      country: '',
      postalCode: ''
    };
    this.selectedCategoryIds = [];
    this.submitted = false;
    this.errorMessage = '';
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    this.isSubmitting = true;

    if (!this.authService.getAccessToken()) {
      this.errorMessage = 'Please log in before adding an item.';
      this.resetSubmitting();
      return;
    }

    if (!this.itemData.name || !this.itemData.description || 
        !this.itemData.pricing || !this.itemData.size || 
        !this.itemData.condition || !this.itemData.deposit ||
        this.selectedCategoryIds.length === 0) {
      this.errorMessage = this.translations.addItem?.errorRequired || 'Please fill in all required fields';
      this.resetSubmitting();
      return;
    }

    if (this.itemData.photos.length === 0) {
      this.errorMessage = this.translations.addItem?.errorNoPhotos || 'Please add at least one photo';
      this.resetSubmitting();
      return;
    }

    if (isNaN(parseFloat(this.itemData.pricing)) || parseFloat(this.itemData.pricing) <= 0) {
      this.errorMessage = this.translations.addItem?.errorInvalidPricing || 'Please enter a valid price';
      this.resetSubmitting();
      return;
    }

    if (isNaN(parseFloat(this.itemData.deposit)) || parseFloat(this.itemData.deposit) <= 0) {
      this.errorMessage = this.translations.addItem?.errorInvalidDeposit || 'Please enter a valid deposit amount';
      this.resetSubmitting();
      return;
    }

    const pricePerDay = parseFloat(this.itemData.pricing);
    const deposit = parseFloat(this.itemData.deposit);
    const sizeValue = this.normalizeSize(this.itemData.size);

    this.itemsService.uploadImages(this.itemData.photos).pipe(
      switchMap((imageUrls: string[]) => {
        const normalizedCondition = this.normalizeCondition(this.itemData.condition);
        const payload: CreateItemRequest = {
          name: this.itemData.name,
          description: this.itemData.description,
          categoryIds: this.selectedCategoryIds,
          status: 'available',
          pricePerDay,
          condition: normalizedCondition,
          size: sizeValue,
          brand: this.itemData.brand || undefined,
          images: imageUrls,
          imageURLs: imageUrls,
          location: {
            address: this.itemData.address,
            city: this.itemData.city,
            state: this.itemData.state,
            country: this.itemData.country,
            postalCode: this.itemData.postalCode
          },
          deposit: deposit || 0,
          minimumRentalDays: 1,
          maximumRentalDays: 30,
          publishedState: 'draft'
        };

        return this.itemsService.createItem(payload);
      })
    ).subscribe({
      next: () => {
      alert(this.translations.addItem?.successMessage || 'Item added successfully!');
      this.closeModal();
        this.resetSubmitting(true);
      },
      error: (error) => {
        console.error('Add item error', error);
        this.errorMessage = error?.error?.message || 'Failed to add item. Please try again.';
        this.resetSubmitting();
      }
    });
  }

  private resetSubmitting(success: boolean = false) {
    this.submitted = success ? false : this.submitted;
    this.isSubmitting = false;
  }

  private normalizeSize(size: string): CreateItemRequest['size'] {
    const normalized = size.toUpperCase().trim();
    const allowed = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL', 'OTHER'];
    return (allowed.includes(normalized) ? normalized : 'OTHER');
  }

  private normalizeCondition(condition: string): CreateItemRequest['condition'] {
    const map: Record<string, CreateItemRequest['condition']> = {
      'new': 'New',
      'e re': 'New',
      'like-new': 'Like New',
      'like new': 'Like New',
      'good': 'Good',
      'fair': 'Fair',
      'poor': 'Poor'
    };
    return map[condition.toLowerCase()] || 'Good';
  }

  private applyDefaultLocation() {
    if (!this.itemData.address) this.itemData.address = 'Unknown address';
    if (!this.itemData.city) this.itemData.city = 'Prishtina';
    if (!this.itemData.state) this.itemData.state = 'Prishtina';
    if (!this.itemData.country) this.itemData.country = 'Kosovo';
    if (!this.itemData.postalCode) this.itemData.postalCode = '10000';
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }
}



