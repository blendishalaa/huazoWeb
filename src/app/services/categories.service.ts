import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from './api.config';

export type Category = {
  _id: string;
  name: string;
  description?: string;
};

type CategoriesResponse = {
  success?: boolean;
  data?: Category[];
  categories?: Category[];
  pagination?: unknown;
} | Category[];

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories = (): Observable<CategoriesResponse> => this.http.get<CategoriesResponse>(API_ENDPOINTS.categories);
}
