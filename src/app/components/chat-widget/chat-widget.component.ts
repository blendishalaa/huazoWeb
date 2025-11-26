import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { translations, Translations } from '../../services/translations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.css'
})
export class ChatWidgetComponent implements OnInit, OnDestroy {
  isOpen = false;
  message = '';
  showWidget = false;
  currentLanguage: 'sq' | 'en' = 'sq';
  translations: Translations = translations['sq'];
  private languageSubscription?: Subscription;
  private showTimeout?: any;

  // WhatsApp number (country code + number, no + sign)
  whatsappNumber = '38349855484';

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.updateTranslations();
    
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.updateTranslations();
    });
  }

  ngOnInit() {
    // Show widget after 5 seconds
    this.showTimeout = setTimeout(() => {
      this.showWidget = true;
    }, 5000);
  }

  ngOnDestroy() {
    this.languageSubscription?.unsubscribe();
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
    }
  }

  updateTranslations() {
    this.translations = translations[this.currentLanguage];
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  closeChat() {
    this.isOpen = false;
  }

  sendMessage() {
    if (this.message.trim()) {
      // Clean the message
      const cleanMessage = this.message.trim();
      
      // Encode the message for URL - encodeURIComponent handles all special characters
      const encodedMessage = encodeURIComponent(cleanMessage);
      
      // Create WhatsApp URL - format: https://wa.me/PHONENUMBER?text=MESSAGE
      const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
      
      // Check if mobile device
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      try {
        if (isMobile) {
          // For mobile, open WhatsApp app directly
          // This will open the app if installed, or web version if not
          window.location.href = whatsappUrl;
        } else {
          // For desktop, open WhatsApp Web in new tab
          const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
          
          // If popup blocked, try direct navigation
          if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
            window.location.href = whatsappUrl;
          }
        }
      } catch (error) {
        console.error('Error opening WhatsApp:', error);
        // Fallback: try direct navigation
        window.location.href = whatsappUrl;
      }
      
      // Clear the message
      this.message = '';
      
      // Close the chat widget after opening WhatsApp
      setTimeout(() => {
        this.closeChat();
      }, 500);
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}

