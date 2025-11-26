import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Language = 'sq' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject: BehaviorSubject<Language>;
  public currentLanguage$: Observable<Language>;

  constructor() {
    // Default to Albanian (sq)
    const savedLanguage = localStorage.getItem('language') as Language;
    const defaultLanguage: Language = savedLanguage || 'sq';
    
    this.currentLanguageSubject = new BehaviorSubject<Language>(defaultLanguage);
    this.currentLanguage$ = this.currentLanguageSubject.asObservable();
  }

  getCurrentLanguage(): Language {
    return this.currentLanguageSubject.value;
  }

  setLanguage(language: Language): void {
    this.currentLanguageSubject.next(language);
    localStorage.setItem('language', language);
  }

  toggleLanguage(): void {
    const newLanguage: Language = this.currentLanguageSubject.value === 'sq' ? 'en' : 'sq';
    this.setLanguage(newLanguage);
  }
}

