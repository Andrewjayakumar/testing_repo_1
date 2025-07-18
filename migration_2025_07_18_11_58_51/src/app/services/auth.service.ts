import { Injectable } from '@angular/core';
// Import HttpClient if legacy Http was used
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  
  // Converted service logic from Angular 4; use HttpClient methods instead of deprecated Http
  login(credentials: any) {
    // Replace with actual endpoint and logic
    return this.http.post('/api/login', credentials);
  }
}
