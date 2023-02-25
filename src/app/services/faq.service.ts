import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class FaqService {
  //----------------- Attributes ---------------------//
  private apiUrl = GlobalConstants.apiURL + 'faqs'
  // token: any = localStorage.getItem('token');
  formData = new FormData();
  headers = new HttpHeaders({
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${this.token}`,
  })
  //----------------- Default Methods ----------------//
  constructor(private http: HttpClient) { }
  //-------------------- Methods ---------------------//
  getFaqs(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers });
  }
  deleteFaq(id: number) {
    return this.http.delete<any>(this.apiUrl + '/' + id, { headers: this.headers });
  }
  postFaq(faq: FormData) {
    return this.http.post<any>(this.apiUrl, faq, { headers: this.headers });
  }
  updateFaq(id: number, faq: FormData) {
    return this.http.post(this.apiUrl + '/' + id + '?_method=PATCH', faq, { headers: this.headers });
  }
}