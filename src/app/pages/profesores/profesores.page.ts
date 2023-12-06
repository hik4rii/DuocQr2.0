import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Iprofesores } from 'src/app/interfaces/iprofesores';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
})
export class ProfesoresPage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  listaProfesores!: Iprofesores[] ;

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
      this.mensajeUtil.mensajeToast('info','Teachers List',2000,'bottom')
    }if(this.translateService.currentLang=='Español'){
      this.mensajeUtil.mensajeToast('info','Lista de Profesores',2000,'bottom')
    }if(this.translateService.currentLang=='Japanese'){
      this.mensajeUtil.mensajeToast('info','教師リスト',2000,'bottom')
    }this.listar()
  }

  listar() {
    this.fireServices.getCollectionp('Profesores').subscribe((profesores) => {
      this.listaProfesores = profesores
    });
  }

  addProfesor() {
    this.router.navigate(['/profesores/addp']);
  }


}
