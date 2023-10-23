import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApibdService } from 'src/app/services/bd/apibd.service';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';


@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage implements OnInit {

  listaAsignaturas: any[] = [];

  constructor(
    private router:Router,
    private http: HttpClient,
    private ApibdService: ApibdService,
    private mensajeUtil: MensajeService
  ) { }

  ionViewWillEnter() {
    this.listar();
    this.mensajeUtil.mensajeToast('success','Asignaturas cargadas correctamente.',2000,'bottom')
    
  }

  ngOnInit() {
    this.listar();
    
  }

  navigateTodetalle() {
    // Navegar a la página de detalle dentro del módulo de asignaturas
    this.router.navigate(['asignaturas/detalle']);
  }

  listar() {
    this.ApibdService.ListAsignaturas().subscribe((data: any) => {
      this.listaAsignaturas = data;
    },
    (error) => {
      console.error('Error al cargar asignaturas:', error);
    });
  }

}
