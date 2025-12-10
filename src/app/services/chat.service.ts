import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  // TODO: Update this URL to your backend API endpoint
  private apiUrl = 'https://your-backend-api.com/api/chat/send';

  constructor(private http: HttpClient) {}

  sendMessage(message: string, phoneNumber: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      message: message,
      phoneNumber: phoneNumber,
      timestamp: new Date().toISOString()
    };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      catchError(error => {
        console.error('Error sending message:', error);
        // Return a successful response for now (you'll handle errors in the component)
        return of({ success: false, error: error.message });
      })
    );
  }
}




