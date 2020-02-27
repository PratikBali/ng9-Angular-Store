import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getBooks() {
    const getUrl = `http://fakerestapi.azurewebsites.net/api/Books`;
    return this.http.get(getUrl);
  }
}
