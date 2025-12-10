import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations, Translations } from '../../services/translations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit, OnDestroy {
  currentYear = new Date().getFullYear();
  currentLanguage: 'sq' | 'en' = 'sq';
  translations: Translations = translations['sq'];
  private languageSubscription?: Subscription;
  
  companyLinks: { label: string; path: string }[] = [];
  resourcesLinks: { label: string; path: string }[] = [];
  legalLinks: { label: string; path: string }[] = [];
  
  socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'YouTube', icon: 'youtube', url: '#' },
    { name: 'LinkedIn', icon: 'linkedin', url: '#' }
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
    this.companyLinks = [
      { label: this.translations.footer.links.blog, path: '/blog' },
      { label: this.translations.footer.links.careers, path: '/careers' },
      { label: this.translations.footer.links.pricing, path: '/pricing' }
    ];
    
    this.resourcesLinks = [
      { label: this.translations.footer.links.documentation, path: '/documentation' },
      { label: this.translations.footer.links.papers, path: '/papers' },
      { label: this.translations.footer.links.pressConferences, path: '/press' }
    ];
    
    this.legalLinks = [
      { label: this.translations.footer.links.termsOfService, path: '/terms' },
      { label: this.translations.footer.links.privacyPolicy, path: '/privacy' },
      { label: this.translations.footer.links.cookiesPolicy, path: '/cookies' },
      { label: this.translations.footer.links.dataProcessing, path: '/data-processing' }
    ];
  }
}

