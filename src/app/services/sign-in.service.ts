import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../components/admin';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private _http : HttpClient) { }

  public signInUserFromRemote(admin : Admin):Observable<any>{
    return this._http.post<any>("http://localhost:8090/admin", admin)
  }
}
