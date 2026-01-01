import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { translations, Translations } from '../../services/translations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {
  currentLanguage: 'sq' | 'en' = 'sq';
  translations: Translations = translations['sq'];
  private languageSubscription?: Subscription;
  isSubmitting = false;

  loginData = {
    email: '',
    password: ''
  };

  submitted = false;
  errorMessage = '';

  constructor(
    private languageService: LanguageService
  ) {}

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

  onSubmit() {
    this.submitted = true;
    this.errorMessage = '';
    this.isSubmitting = true;

    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = this.translations.auth?.login?.errorRequired || 'Please fill in all fields';
      this.submitted = false;
      this.isSubmitting = false;
      return;
    }

    this.errorMessage = this.translations.auth?.login?.webOnly || 'Login is available in the Huazo mobile app.';
    this.submitted = false;
    this.isSubmitting = false;
  }
}
