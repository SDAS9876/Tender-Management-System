import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractorService {

  constructor(private httpclient: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.httpclient.get("http://localhost:8080/user");
  }
}
