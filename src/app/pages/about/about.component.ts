import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { translations, Translations } from '../../services/translations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  currentLanguage: 'sq' | 'en' = 'sq';
  translations: Translations = translations['sq'];
  private languageSubscription?: Subscription;

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
  }
}

