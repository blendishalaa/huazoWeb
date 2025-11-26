import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatWidgetComponent } from './components/chat-widget/chat-widget.component';
import { LanguageService } from './services/language.service';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ChatWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Huazo - Clothes Rental';
  private languageSubscription?: Subscription;

  constructor(
    private languageService: LanguageService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    // Set initial language
    const currentLang = this.languageService.getCurrentLanguage();
    this.document.documentElement.lang = currentLang;

    // Update lang attribute when language changes
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(lang => {
      this.document.documentElement.lang = lang;
    });
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
  }
}

