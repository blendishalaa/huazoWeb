import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { translations, Translations } from '../../services/translations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit, OnDestroy {
  currentLanguage: 'sq' | 'en' = 'sq';
  translations: Translations = translations['sq'];
  private languageSubscription?: Subscription;

  currentStep: 'form' | 'verification' = 'form';

  signupData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    phone: '',
    accountType: 'person' // 'person' or 'company'
  };

  verificationCode = '';
  verificationCodeSent = false;
  submitted = false;
  errorMessage = '';

  constructor(
    private languageService: LanguageService,
    private router: Router
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

  onSubmitForm() {
    this.submitted = true;
    this.errorMessage = '';

    // Validate required fields
    if (!this.signupData.firstName || !this.signupData.lastName || 
        !this.signupData.email || !this.signupData.password || 
        !this.signupData.dateOfBirth || !this.signupData.gender || 
        !this.signupData.accountType) {
      this.errorMessage = this.translations.auth?.signup?.errorRequired || 'Please fill in all required fields';
      this.submitted = false;
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.signupData.email)) {
      this.errorMessage = this.translations.auth?.signup?.errorInvalidEmail || 'Please enter a valid email address';
      this.submitted = false;
      return;
    }

    // Validate password length
    if (this.signupData.password.length < 8) {
      this.errorMessage = this.translations.auth?.signup?.errorPasswordLength || 'Password must be at least 8 characters';
      this.submitted = false;
      return;
    }

    // TODO: Implement actual signup API call
    console.log('Signup data:', this.signupData);
    
    // Simulate sending verification code
    setTimeout(() => {
      this.verificationCodeSent = true;
      this.currentStep = 'verification';
      this.submitted = false;
    }, 1000);
  }

  onSubmitVerification() {
    this.submitted = true;
    this.errorMessage = '';

    if (!this.verificationCode || this.verificationCode.length !== 6) {
      this.errorMessage = this.translations.auth?.signup?.errorVerificationCode || 'Please enter a valid 6-digit verification code';
      this.submitted = false;
      return;
    }

    // TODO: Implement actual verification API call
    console.log('Verification code:', this.verificationCode);
    
    // Simulate successful verification - redirect to home
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

  resendVerificationCode() {
    // TODO: Implement resend verification code
    console.log('Resending verification code to:', this.signupData.email);
    this.verificationCodeSent = false;
    setTimeout(() => {
      this.verificationCodeSent = true;
    }, 1000);
  }

  goBackToForm() {
    this.currentStep = 'form';
    this.verificationCode = '';
    this.errorMessage = '';
  }
}



