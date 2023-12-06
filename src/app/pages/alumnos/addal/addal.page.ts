import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ialumnos } from 'src/app/interfaces/ialumnos';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-addal',
  templateUrl: './addal.page.html',
  styleUrls: ['./addal.page.scss'],
})
export class AddalPage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  alumno: Ialumnos = {
    nombre: 'TEST',
    correo: 'TES@DUOC',
    contrasena: '1234',
    carrera: 'CARRERATEST',
    imagen:'https://thenib.com/wp-content/uploads/2019/08/pepe-the-frog-to-sleep-perchance-to-meme-001-e7cfd2-1.png',
    asistencia: 13,
    rol: 'alumno'
    
  }

  constructor(
    private router: Router,
    private fireservices: CrudfirebaseService,
    private translateService: TranslateService) {
      this.langs = this.translateService.getLangs();
     }

  ngOnInit() {
  }

  createAlumno() {
    this.fireservices.createAlumno('Alumnos', this.alumno);
    this.router.navigate(['/alumnos'])
  }
}
