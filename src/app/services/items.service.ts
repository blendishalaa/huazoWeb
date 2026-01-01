import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_ENDPOINTS } from './api.config';
import { AuthService } from './auth.service';

type ImageUploadResponse = {
  images: Array<{
    imageKey: string;
    imageUrl: string;
  }>;
};

export type CreateItemRequest = {
  name: string;
  description: string;
  categoryIds: string[];
  status: 'available' | 'rented' | 'maintenance' | 'deleted';
  pricePerDay: number;
  condition: 'New' | 'Like New' | 'Good' | 'Fair' | 'Poor';
  size?: string;
  brand?: string;
  color?: string;
  material?: string;
  style?: string;
  season?: string;
  occasion?: string;
  gender?: string;
  age?: string;
  images: string[];
  imageURLs: string[];
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    coordinates?: { latitude: number; longitude: number };
  };
  deposit?: number;
  minimumRentalDays: number;
  maximumRentalDays: number;
  publishedState: 'draft' | 'published' | 'unpublished' | 'archived';
};

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  private authHeaders = (): HttpHeaders => this.authService.getAuthHeaders();

  uploadImages = (files: File[]): Observable<string[]> => {
    const token = this.authService.getAccessToken();
    if (!token) {
      console.error('Missing access token for uploadImages');
      return throwError(() => new Error('Please log in first'));
    }

    const formData = new FormData();
    files.forEach((file) => formData.append('images', file));

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.post<ImageUploadResponse>(API_ENDPOINTS.uploadImages, formData, { headers }).pipe(
      map((resp) => resp.images.map((img) => img.imageUrl)),
      catchError((error) => {
        console.error('Image upload failed', error);
        return throwError(() => error);
      })
    );
  };

  createItem = (payload: CreateItemRequest): Observable<unknown> => {
    const headers = this.authHeaders();
    return this.http.post(API_ENDPOINTS.items, payload, { headers }).pipe(
      catchError((error) => {
        console.error('Create item failed', error);
        return throwError(() => error);
      })
    );
  };
}
