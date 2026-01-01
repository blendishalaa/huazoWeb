import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from './api.config';
import { Observable } from 'rxjs';

type UserProfile = {
  _id: string;
  email: string;
  name?: string;
  surname?: string;
  location?: {
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
  };
};

type ProfileResponse = {
  success?: boolean;
  data?: UserProfile;
} | UserProfile;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  getProfile = (): Observable<ProfileResponse> => this.http.get<ProfileResponse>(API_ENDPOINTS.profile);
}








