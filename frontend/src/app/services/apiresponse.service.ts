import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiresponseService {
  private baseUrl = 'http://localhost:8080/api';
  constructor(private http:HttpClient,private token:TokenService) { }

  createAuthorizationHeader(headers: HttpHeaders) {
    return headers.append('Authorization',"Bearer "+ this.token.get()); 
  }

  signup(data):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/signup`,data);
  }

  login(data): Observable<any>
  {
    return this.http.post(`${this.baseUrl}/login`,data);
  }

  sendPasswordResetLink(data): Observable<any>
  {
    return this.http.post(`${this.baseUrl}/sendPasswordResetLink`,data);
  }
  resetPassword(data): Observable<any>
  {
    return this.http.post(`${this.baseUrl}/resetPassword`,data);
  }
  addCategory(data): Observable<any>
  {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.post(`${this.baseUrl}/category/add`,data,{ headers: this.createAuthorizationHeader(headers)});
  }
  updateCategory(data,categoryId): Observable<any>
  {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.post(`${this.baseUrl}/category/update/`+categoryId,data,{ headers: this.createAuthorizationHeader(headers)});
  }
  listCategory(): Observable<any>
  {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(`${this.baseUrl}/category/index`,{ headers: this.createAuthorizationHeader(headers)});
  }
  showCategory(categoryId): Observable<any>
  {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(`${this.baseUrl}/category/show/`+categoryId,{ headers: this.createAuthorizationHeader(headers)});
  }
  deleteCategory(categoryId): Observable<any>
  {
    let headers = new HttpHeaders();
    this.createAuthorizationHeader(headers);
    return this.http.get(`${this.baseUrl}/category/destroy/`+categoryId,{ headers: this.createAuthorizationHeader(headers)});
  }

}
