import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7155/api/user'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, loginData);
  }

  register(registerData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerData);
  }

  resetPassword(email: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/reset-password`, { email });
  }
}
