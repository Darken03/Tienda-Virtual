// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/ingresar/'; // URL de tu vista Django

  constructor(private http: HttpClient) {}

  getCookie(name: string): string | undefined {
    const cookieValue = document.cookie.split('; ').find(row => row.startsWith(name + '='));
    return cookieValue ? cookieValue.split('=')[1] : undefined;
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
  });

    return this.http.post(this.apiUrl, { email, password }, { headers });
  }
}
