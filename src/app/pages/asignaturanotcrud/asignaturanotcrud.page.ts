import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Iasignaturas } from 'src/app/interfaces/iasignaturas';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';

@Component({
  selector: 'app-asignaturanotcrud',
  templateUrl: './asignaturanotcrud.page.html',
  styleUrls: ['./asignaturanotcrud.page.scss'],
})
export class AsignaturanotcrudPage implements OnInit {
  langs: string[] = [];
  idioma!: string;
  listaAsignaturas!: Iasignaturas[] ;

  constructor(
    private router:Router,
    private mensajeUtil: MensajeService,
    private fireServices: CrudfirebaseService,
    private translateService: TranslateService) {
      this.langs = this.translateService.getLangs(); }

  ionViewWillEnter() {
    this.listar()

  }

  ngOnInit() {
    this.listar();
    if(this.translateService.currentLang=='English'){
      this.mensajeUtil.mensajeToast('success','Choose your subject',2000,'bottom');
    }if(this.translateService.currentLang=='Español'){
      this.mensajeUtil.mensajeToast('success','Selecciona tu asignatura',2000,'bottom');
    }if(this.translateService.currentLang=='Japanese'){
      this.mensajeUtil.mensajeToast('success','主題を選択してください',2000,'bottom');
    }
    this.listar()

  }

  listar() {
    this.fireServices.getCollectiona('Asignaturas').subscribe((asignaturas) => {
      this.listaAsignaturas = asignaturas
    });
  }

  addAsigantura() {
    this.router.navigate(['/asignaturas/adda']);
  }
}
