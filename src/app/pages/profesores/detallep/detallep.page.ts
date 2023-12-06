import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Iprofesores } from 'src/app/interfaces/iprofesores';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';

@Component({
  selector: 'app-detallep',
  templateUrl: './detallep.page.html',
  styleUrls: ['./detallep.page.scss'],
})
export class DetallepPage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  profe! : Iprofesores| undefined;

   constructor(
    private router: Router,
    private fireServices: CrudfirebaseService,
    private route: ActivatedRoute,
    private translateService: TranslateService) {
      this.langs = this.translateService.getLangs();
     }

  ngOnInit() {
    this.getProfesores()
  }


  ionViewWillEnter() {
    this.getProfesores()
  }
  
  getProfesores() {
    const profeId = this.route.snapshot.paramMap.get('id');
    
    if ( profeId ) {
      this.fireServices.geteProfesorById('Profesores', profeId).subscribe( (profe) => {
        this.profe = profe || {} as Iprofesores;
        this.profe.id =profeId;
      });
    }
  }
  deleteProfesores() {
    const profeId = this.route.snapshot.paramMap.get('id');
    if ( profeId ) {
      this.fireServices.deleteProfesor('Profesores', profeId);
      this.router.navigate(['/profesores'])
    }
  } 

}
