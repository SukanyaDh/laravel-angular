import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiresponseService {
  private baseUrl = 'http://localhost:8000/api';
  constructor(private http:HttpClient) { }

  signup(data):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/signup`,data);
  }

  login(data): Observable<any>
  {
    return this.http.post(`${this.baseUrl}/login`,data);
  }
}
