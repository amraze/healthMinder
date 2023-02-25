import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {
  //----------------- Attributes ---------------------//
  private apiUrl = GlobalConstants.apiURL + 'calendars'
  // token: any = localStorage.getItem('token');
  formData = new FormData();
  headers = new HttpHeaders({
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${this.token}`,
  })
  //----------------- Default Methods ----------------//
  constructor(private http: HttpClient) { }
  //-------------------- Methods ---------------------//
  getCalendars(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.headers });
  }
  deleteCalendar(id: number) {
    return this.http.delete<any>(this.apiUrl + '/' + id, { headers: this.headers });
  }
  postCalendar(calendar: FormData) {
    return this.http.post<any>(this.apiUrl, calendar, { headers: this.headers });
  }
  updateCalendar(id: number, calendar: FormData) {
    return this.http.post(this.apiUrl + '/' + id + '?_method=PATCH', calendar, { headers: this.headers });
  }
}