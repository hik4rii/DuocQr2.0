import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://randomuser.me/api/?results=20'
  
  constructor(private http: HttpClient) { }

  getRandomUser(): Observable<any> {
    return this.http.get('https://randomuser.me/api')
  }

  getUsuariosAleatorios(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
