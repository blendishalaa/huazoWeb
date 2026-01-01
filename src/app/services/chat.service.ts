import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  status?: 'sending' | 'sent' | 'failed';
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private whatsappBaseUrl = 'https://wa.me';

  sendMessage(message: string, phoneNumber: string): Observable<any> {
    const encodedMessage = encodeURIComponent(message);
    const url = `${this.whatsappBaseUrl}/${phoneNumber}?text=${encodedMessage}`;

    if (typeof window !== 'undefined') {
      const opened = window.open(url, '_blank');
      if (!opened) {
        window.location.href = url;
      }
    }

    return of({ success: true, url });
  }
}



