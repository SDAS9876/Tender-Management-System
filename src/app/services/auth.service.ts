import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Products {}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://fakestoreapi.com/products/1');
  }
}
