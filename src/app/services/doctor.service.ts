import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class DoctorService {
  //----------------- Attributes ---------------------//
  private apiUrl = GlobalConstants.apiURL + 'doctors'
  // token: any = localStorage.getItem('token');
  formData = new FormData();
  headers = new HttpHeaders({
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${this.token}`,
  })
  //----------------- Default Methods ----------------//
  constructor(private http: HttpClient) { }
  //-------------------- Methods ---------------------//
  getDoctors(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers });
  }
  deleteDoctor(id: number) {
    return this.http.delete<any>(this.apiUrl + '/' + id, { headers: this.headers });
  }
  postDoctor(doctor: FormData) {
    return this.http.post<any>(this.apiUrl, doctor, { headers: this.headers });
  }
  updateDoctor(id: number, doctor: FormData) {
    return this.http.post(this.apiUrl + '/' + id + '?_method=PATCH', doctor, { headers: this.headers });
  }
}