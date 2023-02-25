import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GlobalConstants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})

export class BlogService {
  //----------------- Attributes ---------------------//
  private apiUrl = GlobalConstants.apiURL + 'blogs'
  // token: any = localStorage.getItem('token');
  formData = new FormData();
  headers = new HttpHeaders({
    'Accept': 'application/json',
    // 'Authorization': `Bearer ${this.token}`,
  })
  //----------------- Default Methods ----------------//
  constructor(private http: HttpClient) { }
  //-------------------- Methods ---------------------//
  getBlogs(page: number = 1): Observable<any> {
    return this.http.get<any>(this.apiUrl + '?page=' + page, { headers: this.headers });
  }
  deleteBlog(id: number) {
    return this.http.delete<any>(this.apiUrl + '/' + id, { headers: this.headers });
  }
  postBlog(blog: FormData) {
    return this.http.post<any>(this.apiUrl, blog, { headers: this.headers });
  }
  updateBlog(id: number, blog: FormData) {
    return this.http.post(this.apiUrl + '/' + id + '?_method=PATCH', blog, { headers: this.headers });
  }
}