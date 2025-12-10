import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageService } from '../../services/language.service';
import { ChatService, ChatMessage } from '../../services/chat.service';
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
  messages: ChatMessage[] = [];
  isSending = false;
  private languageSubscription?: Subscription;
  private showTimeout?: any;

  // WhatsApp number (country code + number, no + sign)
  whatsappNumber = '38349855484';

  constructor(
    private languageService: LanguageService,
    private chatService: ChatService
  ) {
    this.currentLanguage = this.languageService.getCurrentLanguage();
    this.updateTranslations();
    this.initializeMessages();
    
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.updateTranslations();
    });
  }

  initializeMessages() {
    // Add welcome messages
    this.messages = [
      {
        id: '1',
        text: this.translations.chat?.welcomeMessage || 'Hello! How can we help you today?',
        sender: 'bot',
        timestamp: new Date()
      },
      {
        id: '2',
        text: this.translations.chat?.instruction || 'Type your message below and we\'ll get back to you on WhatsApp.',
        sender: 'bot',
        timestamp: new Date()
      }
    ];
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
    // Update bot messages if they exist
    if (this.messages.length >= 2) {
      this.messages[0].text = this.translations.chat?.welcomeMessage || 'Hello! How can we help you today?';
      this.messages[1].text = this.translations.chat?.instruction || 'Type your message below and we\'ll get back to you on WhatsApp.';
    }
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      // Scroll to bottom when opening
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  closeChat() {
    this.isOpen = false;
  }

  scrollToBottom() {
    const chatBody = document.querySelector('.chat-body');
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight;
    }
  }

  sendMessage() {
    if (this.message.trim() && !this.isSending) {
      const cleanMessage = this.message.trim();
      
      // Add user message to chat
      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        text: cleanMessage,
        sender: 'user',
        timestamp: new Date(),
        status: 'sending'
      };
      
      this.messages.push(userMessage);
      this.message = '';
      this.isSending = true;
      
      // Scroll to bottom
      setTimeout(() => this.scrollToBottom(), 100);
      
      // Send message to backend API
      this.chatService.sendMessage(cleanMessage, this.whatsappNumber).subscribe({
        next: (response) => {
          userMessage.status = response.success !== false ? 'sent' : 'failed';
          this.isSending = false;
          
          // Add bot confirmation message
          if (response.success !== false) {
            setTimeout(() => {
              const botMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                text: this.translations.chat?.sentConfirmation || 'Message sent! We\'ll reply to you on WhatsApp shortly.',
                sender: 'bot',
                timestamp: new Date()
              };
              this.messages.push(botMessage);
              setTimeout(() => this.scrollToBottom(), 100);
            }, 500);
          } else {
            // Show error message
            const errorMessage: ChatMessage = {
              id: (Date.now() + 1).toString(),
              text: this.translations.chat?.errorMessage || 'Sorry, there was an error sending your message. Please try again.',
              sender: 'bot',
              timestamp: new Date()
            };
            this.messages.push(errorMessage);
            setTimeout(() => this.scrollToBottom(), 100);
          }
        },
        error: (error) => {
          console.error('Error sending message:', error);
          userMessage.status = 'failed';
          this.isSending = false;
          
          // Show error message
          const errorMessage: ChatMessage = {
            id: (Date.now() + 1).toString(),
            text: this.translations.chat?.errorMessage || 'Sorry, there was an error sending your message. Please try again.',
            sender: 'bot',
            timestamp: new Date()
          };
          this.messages.push(errorMessage);
          setTimeout(() => this.scrollToBottom(), 100);
        }
      });
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}

