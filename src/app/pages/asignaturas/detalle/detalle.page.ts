import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iasignaturas } from 'src/app/interfaces/iasignaturas';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';
import { TranslateService } from '@ngx-translate/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  listaAlumnos: any[] = [];
  paginaActual: number = 1;
  usuariosPorPagina: number = 5;

  asignatura! : Iasignaturas | undefined;

   constructor(

    private router: Router,
    private fireServices: CrudfirebaseService,
    private route: ActivatedRoute,
    private randomUser: ApiService,
    private translateService: TranslateService
  ) {this.langs = this.translateService.getLangs(); }

  ngOnInit() {
    this.getAsignatura()
  }


  ionViewWillEnter() {
    this.getAsignatura()
  }

  navigateToQR() {
    this.router.navigate(['asignaturas/detalle/generaqr']);
  }
  
  getAsignatura() {
    const asignaturaId = this.route.snapshot.paramMap.get('id');
    
    if ( asignaturaId ) {
      this.fireServices.geteAsignaturaById('Asignaturas', asignaturaId).subscribe( (asignatura) => {
        this.asignatura = asignatura || {} as Iasignaturas;
        this.asignatura.id = asignaturaId;
      });
    }
  }
  deleteAsignatura() {

    const asignaturaId = this.route.snapshot.paramMap.get('id');

    if ( asignaturaId ) {
      this.fireServices.deleteAsignatura('Asignaturas', asignaturaId);
      this.router.navigate(['/asignaturas'])
    }
  } 

  obtenerPagina() {
    const inicio = (this.paginaActual - 1) * this.usuariosPorPagina;
    const fin = inicio + this.usuariosPorPagina;
    return this.listaAlumnos.slice(inicio, fin);
  } 

  paginaSiguiente() {
    const totalPages = Math.ceil(this.listaAlumnos.length / this.usuariosPorPagina);
    if (this.paginaActual < totalPages) {
      this.paginaActual++;
    }
  }

  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
    }
  }

  obtenerFuenteImagen(aux: any): string {
    
    if (aux.hasOwnProperty('foto')) {
      return aux.foto;
    } else if (aux.hasOwnProperty('picture') && aux.picture.hasOwnProperty('large')) {
      return aux.picture.large;
    } else {
      
      return 'https://upload.wikimedia.org/wikipedia/commons/5/51/No_imagen_disponible.gif';
    }
  }

  generarusuariosrandom(cantidad: number) {
    // Realizar múltiples solicitudes a la API para obtener usuarios aleatorios
    for (let i = 0; i < cantidad; i++) {
      this.randomUser.getRandomUser().subscribe((data: any) => {
        const randomUser = data.results[0];

        // Construir un objeto de alumno con los datos aleatorios
        const alumno = {
          nombre: `${randomUser.name.first} ${randomUser.name.last}`,
          correo: randomUser.email,
          picture: randomUser.picture
        };

        // Agregar el alumno a la lista de alumnos
        this.listaAlumnos.push(alumno);
      });
    }
  }

}
