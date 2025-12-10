import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { translations, Translations } from '../../services/translations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentLanguage: 'sq' | 'en' = 'sq';
  translations: Translations = translations['sq'];
  private languageSubscription?: Subscription;

  navLinks: { label: string; path: string }[] = [];

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
    this.navLinks = [
      { label: this.translations.header.home, path: '/home' },
      { label: this.translations.header.pricing, path: '/pricing' },
      { label: this.translations.header.about, path: '/about' },
      { label: this.translations.header.contact, path: '/contact' }
    ];
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }

  getLanguageLabel(): string {
    return this.currentLanguage === 'sq' ? 'EN' : 'SQ';
  }
}

