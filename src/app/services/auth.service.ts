import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Products {}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isLoggedIn = new BehaviorSubject<any>(null);

  isAdmin = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) {}

  register(body: any){
    return this.http.post("http://localhost:8080/user/register", body)
  }

  signIn(){
    this.isLoggedIn.next(true);
    this.isAdmin.next(true);
  }

}
