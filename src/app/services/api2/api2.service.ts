import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Api2Service {

  private apiUrl = 'https://sinca.mma.gob.cl/index.php/json/listadomapa2k19/';

  constructor(private http: HttpClient) {}
    
  getAirQualityData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getUniqueNames(data: any[]): string[] {
    const uniqueNames = new Set<string>();
    data.forEach(item => {
      uniqueNames.add(item.nombre);
    });
    return Array.from(uniqueNames);
  }

  filterDataByName(data: any[], searchTerm: string): any[] {
    if (!searchTerm) {
      return data;
    }
    searchTerm = searchTerm.toLowerCase();
    return data.filter(item => item.nombre.toLowerCase().includes(searchTerm));
  }
  
}

