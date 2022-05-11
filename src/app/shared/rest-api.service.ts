import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  id?: number; //1 - 224
  apiUrl = `https://api.adviceslip.com/advice/`;
  constructor(private http: HttpClient) {}

  //get
  getAdvice() {
    this.id = Math.floor(Math.random() * 224);
    return this.http.get(`https://api.adviceslip.com/advice/${this.id}`);
  }
}
