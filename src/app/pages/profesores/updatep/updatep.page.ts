import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Ialumnos } from 'src/app/interfaces/ialumnos';
import { Iprofesores } from 'src/app/interfaces/iprofesores';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';

@Component({
  selector: 'app-updatep',
  templateUrl: './updatep.page.html',
  styleUrls: ['./updatep.page.scss'],
})
export class UpdatepPage implements OnInit {
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
        this.profe.id = profeId;
      });
    }
  }

  updateProdesores() {
   
    const profeId = this.route.snapshot.paramMap.get('id');
    if ( profeId && this.profe ) {
      this.fireServices.updateProfesor('Profesores',profeId,this.profe);
      this.router.navigate(['/profesores'])
    }
    
  }
}
