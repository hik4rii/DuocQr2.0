import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Ialumnos } from 'src/app/interfaces/ialumnos';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  listaAlumnos!: Ialumnos[] ;

  constructor(
    private router:Router,
    private mensajeUtil: MensajeService,
    private fireServices: CrudfirebaseService,
    private translateService: TranslateService) {
      this.langs = this.translateService.getLangs();
     }

  ionViewWillEnter() {
    this.listar()

  }

  ngOnInit() {
    if(this.translateService.currentLang=='English'){
      this.mensajeUtil.mensajeToast('info','Students List',2000,'bottom')
    }if(this.translateService.currentLang=='Español'){
      this.mensajeUtil.mensajeToast('info','Lista de Almunos',2000,'bottom')
    }if(this.translateService.currentLang=='Japanese'){
      this.mensajeUtil.mensajeToast('info','学生リスト',2000,'bottom')
    }
    this.listar()

  }

  listar() {
    this.fireServices.getCollection('Alumnos').subscribe((alumnos) => {
      this.listaAlumnos = alumnos
    });
  }

  addAlumno() {
    this.router.navigate(['/alumnos/addal']);
  }


}
