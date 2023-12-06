import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iprofesores } from 'src/app/interfaces/iprofesores';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-addp',
  templateUrl: './addp.page.html',
  styleUrls: ['./addp.page.scss'],
})
export class AddpPage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  profe: Iprofesores = {
    nombre: 'TESTProfe',
    correo: 'TES@DUOC',
    contrasena: '1234',
    carrera: 'TEST',
    imagen:'https://i.kym-cdn.com/photos/images/newsfeed/000/882/719/bad.png',
    tipo: 'TEST'
    
  }

  constructor(
    private router: Router,
    private fireservices: CrudfirebaseService,
    private translateService: TranslateService) {
      this.langs = this.translateService.getLangs();
     }

  ngOnInit() {
  }

  createProfe() {
    this.fireservices.createProfesor('Profesores', this.profe);
    this.router.navigate(['/profesores'])
  }
}
