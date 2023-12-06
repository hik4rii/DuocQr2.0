import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenlibraryService {

  private baseUrl = 'https://openlibrary.org';

  constructor(private http: HttpClient) {}

  // Obtener una lista de libros
  getLibros() {
    return this.http.get(`${this.baseUrl}/books.json?`);
  }

  // Realizar una búsqueda
  buscarLibros(query: string) {
    return this.http.get(`${this.baseUrl}/search.json?q=${query}`);
  }
}