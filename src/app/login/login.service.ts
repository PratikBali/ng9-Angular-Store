import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getCredentials() {
    const url = `assets/admin.json`;
    return this.http.get(url);
  }
}
