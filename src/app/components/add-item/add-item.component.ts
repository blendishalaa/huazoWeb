import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { translations, Translations } from '../../services/translations';
import { Subscription } from 'rxjs';

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

  itemData = {
    photos: [] as File[],
    photoPreviews: [] as string[],
    name: '',
    description: '',
    pricing: '',
    size: '',
    brand: '',
    condition: '',
    deposit: ''
  };

  submitted = false;
  errorMessage = '';

  conditionOptions = [
    { value: 'new', label: 'New' },
    { value: 'like-new', label: 'Like New' },
    { value: 'good', label: 'Good' },
    { value: 'fair', label: 'Fair' }
  ];

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.updateTranslations();
    
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.updateTranslations();
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
      deposit: ''
    };
    this.submitted = false;
    this.errorMessage = '';
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';

    // Validate required fields
    if (!this.itemData.name || !this.itemData.description || 
        !this.itemData.pricing || !this.itemData.size || 
        !this.itemData.condition || !this.itemData.deposit) {
      this.errorMessage = this.translations.addItem?.errorRequired || 'Please fill in all required fields';
      this.submitted = false;
      return;
    }

    // Validate at least one photo
    if (this.itemData.photos.length === 0) {
      this.errorMessage = this.translations.addItem?.errorNoPhotos || 'Please add at least one photo';
      this.submitted = false;
      return;
    }

    // Validate pricing and deposit are numbers
    if (isNaN(parseFloat(this.itemData.pricing)) || parseFloat(this.itemData.pricing) <= 0) {
      this.errorMessage = this.translations.addItem?.errorInvalidPricing || 'Please enter a valid price';
      this.submitted = false;
      return;
    }

    if (isNaN(parseFloat(this.itemData.deposit)) || parseFloat(this.itemData.deposit) <= 0) {
      this.errorMessage = this.translations.addItem?.errorInvalidDeposit || 'Please enter a valid deposit amount';
      this.submitted = false;
      return;
    }

    // TODO: Implement actual API call to save item
    console.log('Item data:', this.itemData);
    
    // Simulate successful submission
    setTimeout(() => {
      alert(this.translations.addItem?.successMessage || 'Item added successfully!');
      this.closeModal();
    }, 1000);
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closeModal();
    }
  }
}

