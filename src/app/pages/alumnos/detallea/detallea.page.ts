import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Ialumnos } from 'src/app/interfaces/ialumnos';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';

@Component({
  selector: 'app-detallea',
  templateUrl: './detallea.page.html',
  styleUrls: ['./detallea.page.scss'],
})
export class DetalleaPage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  alumno! : Ialumnos| undefined;

   constructor(
    private router: Router,
    private fireServices: CrudfirebaseService,
    private route: ActivatedRoute,
    private translateService: TranslateService) {
      this.langs = this.translateService.getLangs();
     }

  ngOnInit() {
    this.getAlumnos()
  }

  ionViewWillEnter() {
    this.getAlumnos()
  }
  
  getAlumnos() {
    const alumnoId = this.route.snapshot.paramMap.get('id');
    
    if ( alumnoId ) {
      this.fireServices.geteAlumnoById('Alumnos', alumnoId).subscribe( (alumno) => {
        this.alumno = alumno || {} as Ialumnos;
        this.alumno.id = alumnoId;
      });
    }
  }
  deleteAlumnos() {

    const alumnoId = this.route.snapshot.paramMap.get('id');

    if ( alumnoId ) {
      this.fireServices.deleteAlumno('Alumnos', alumnoId);
      this.router.navigate(['/alumnos'])
    }
  } 

}
