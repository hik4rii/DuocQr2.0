import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { OpenlibraryService } from 'src/app/services/bibliotecaonline/openlibrary.service';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';

@Component({
  selector: 'app-bibliotecaonline',
  templateUrl: './bibliotecaonline.page.html',
  styleUrls: ['./bibliotecaonline.page.scss'],
})
export class BibliotecaonlinePage implements OnInit {

  libros: any[] = [];
  consulta: string = '';

  constructor(private openLibraryService: OpenlibraryService,
              private http: HttpClient,
              private mensajeUtil: MensajeService) {
              }

  cargarLibrosAleatorios() {
    // Realizar una solicitud a la API de Open Library para obtener 10 libros aleatorios
    const apiUrl = 'https://openlibrary.org/api/books?limit=10&format=json';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.libros = data.docs;
    });
  }

  obtenerLibros() {
    this.openLibraryService.getLibros().subscribe((data: any) => {
      console.log("resultado: " + JSON.stringify(data, null, 2));
      this.libros = data.docs;
    });
  }

  buscar() {
    if (this.consulta) {
      this.openLibraryService.buscarLibros(this.consulta).subscribe((data: any) => {
        this.libros = data.docs;
      });
    } else {
      this.obtenerLibros();
    }
  }

  ngOnInit() {
    this.obtenerLibros();
    this.mensajeUtil.mensajeToast('success','Busque el libro de su agrado.',2000,'bottom')
  }

}
