import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Ialumnos } from 'src/app/interfaces/ialumnos';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';

@Component({
  selector: 'app-updateal',
  templateUrl: './updateal.page.html',
  styleUrls: ['./updateal.page.scss'],
})
export class UpdatealPage implements OnInit {
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

  updateAlumno() {
    const alumnoId = this.route.snapshot.paramMap.get('id');
    if ( alumnoId && this.alumno ) {
      this.fireServices.updateAlumno('Alumnos',alumnoId,this.alumno);
      this.router.navigate(['/alumnos'])
    }

  }
}
