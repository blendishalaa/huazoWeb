import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { API_ENDPOINTS } from './api.config';

type LoginRequest = {
  email: string;
  password: string;
};

type LoginResponse = {
  user: {
    _id: string;
    email: string;
    name?: string;
    surname?: string;
    role?: string;
    isRenter?: boolean;
    isRealUser?: boolean;
    accountType?: string;
  };
  accessToken: string;
  refreshToken: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'huazo_access_token';
  private refreshTokenKey = 'huazo_refresh_token';
  private userKey = 'huazo_user';

  private userSubject = new BehaviorSubject<LoginResponse['user'] | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    this.userSubject.next(this.readUserFromStorage());
  }

  private readUserFromStorage = (): LoginResponse['user'] | null => {
    const stored = localStorage.getItem(this.userKey);
    if (!stored) {
      return null;
    }
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error('Failed to parse stored user', error);
      localStorage.removeItem(this.userKey);
      return null;
    }
  };

  getAccessToken = (): string | null => localStorage.getItem(this.accessTokenKey);

  login = (payload: LoginRequest): Observable<LoginResponse> => {
    return this.http.post<LoginResponse>(API_ENDPOINTS.login, payload).pipe(
      tap({
        next: (resp) => this.persistSession(resp),
        error: (error) => console.error('Login failed', error)
      })
    );
  };

  logout = (): void => {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.userKey);
    this.userSubject.next(null);
  };

  getAuthHeaders = (): HttpHeaders => {
    const token = this.getAccessToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    });
  };

  private persistSession = (resp: LoginResponse): void => {
    localStorage.setItem(this.accessTokenKey, resp.accessToken);
    localStorage.setItem(this.refreshTokenKey, resp.refreshToken);
    localStorage.setItem(this.userKey, JSON.stringify(resp.user));
    this.userSubject.next(resp.user);
  };
}
