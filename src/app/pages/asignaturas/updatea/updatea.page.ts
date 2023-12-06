import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iasignaturas } from 'src/app/interfaces/iasignaturas';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';
import { TranslateService } from '@ngx-translate/core';
import { MensajeService } from 'src/app/services/mensajes/mensaje.service';

@Component({
  selector: 'app-updatea',
  templateUrl: './updatea.page.html',
  styleUrls: ['./updatea.page.scss'],
})
export class UpdateaPage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  asignatura! : Iasignaturas | undefined;
  constructor(
    private router: Router,
    private fireServices: CrudfirebaseService,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private mensajeUtil: MensajeService,
  ) {this.langs = this.translateService.getLangs();}

  ngOnInit() {
    this.getAsignatura()
  }


  ionViewWillEnter() {
    this.getAsignatura()
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

  updateAsignatura() {
   
    const asignaturaId = this.route.snapshot.paramMap.get('id');
    if ( asignaturaId && this.asignatura ) {
      this.fireServices.updateAsignatura('Asignaturas',asignaturaId,this.asignatura);
      this.router.navigate(['/asignaturas'])
      if(this.translateService.currentLang=='English'){
        this.mensajeUtil.mensajeToast('success','Choose your subject',2000,'bottom');
      }if(this.translateService.currentLang=='Español'){
        this.mensajeUtil.mensajeToast('success','Datos Modificados ',2000,'bottom');
      }if(this.translateService.currentLang=='Japanese'){
        this.mensajeUtil.mensajeToast('success','主題を選択してください',2000,'bottom');
      }
    }
    
  }
}