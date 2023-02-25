import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  //----------------- Attributes ---------------------//
  private apiUrl = GlobalConstants.apiURL + 'users'
  // token: any = localStorage.getItem('token');
  formData = new FormData();
  headers = new HttpHeaders({
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${this.token}`,
  })
  //----------------- Default Methods ----------------//
  constructor(private http: HttpClient) { }
  //-------------------- Methods ---------------------//
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers });
  }
  deleteUser(id: number) {
    return this.http.delete<any>(this.apiUrl + '/' + id, { headers: this.headers });
  }
  postUser(user: FormData) {
    return this.http.post<any>(this.apiUrl, user, { headers: this.headers });
  }
  updateUser(id: number, user: FormData) {
    return this.http.post(this.apiUrl + '/' + id + '?_method=PATCH', user, { headers: this.headers });
  }
}