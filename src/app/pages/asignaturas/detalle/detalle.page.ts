
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iasignaturas } from 'src/app/interfaces/iasignaturas';
import { ApiService } from 'src/app/services/api/api.service';
import { ApibdService } from 'src/app/services/bd/apibd.service';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})

export class DetallePage implements OnInit {

  listaAlumnos: any[] = [];
  paginaActual: number = 1;
  usuariosPorPagina: number = 5;

  asignatura = {
    id: 0,
    nombre: 'TEST',
    seccion: 'TEST',
    profe: 'TEST',
    foto: 'TEST'
  }

   constructor(
    private ApibdService: ApibdService,
    private router: Router,
    private randomUser: ApiService,
    private mensajeUtil: MensajeService
   
  ) { }

  ngOnInit() {
   this.listarAlumnos();
  }

  navigateToQR() {
    // Navegar a la página de detalle dentro del módulo de asignaturas
    this.router.navigate(['asignaturas/detalle/generaqr']);
  }

  ionViewWillEnter() {
    if (this.asignatura.id === 0) {
      this.getAsignatura(this.getId());
    }
    console.log(this.asignatura)
  }
  

  getId() {
    let url = this.router.url;
    let segments = url.split("/");
    let lastSegment = segments[segments.length - 1];
    let id = parseInt(lastSegment);
    return id;
  }
  

  getAsignatura(id: Number) {
    this.ApibdService.getAsignatura(id).subscribe((data: any) => {
        this.asignatura = {
          id: data[0].id,
          nombre: data[0].nombre,
          seccion: data[0].seccion,
          profe: data[0].profe || 'Profesor no Definido',
          foto: data[0].foto || 'Foto no definida'
        }
        const objetoId = this.asignatura.id;
        console.log('ID: ', objetoId);
        
      },
      (error) => {
        console.error('Error al obtener asignatura:', error);
      }
    );
  }

  listarAlumnos() {
    this.ApibdService.listAlumnos().subscribe((data: any) => {
      this.listaAlumnos = data;
      this.mensajeUtil.mensajeToast('success','Alumnos cargados correctamente.',2000,'bottom')
    },
    (error) => {
      console.error('Error al cargar alumnos:', error);
    });
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
  
}
