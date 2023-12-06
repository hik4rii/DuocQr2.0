import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iasignaturas } from 'src/app/interfaces/iasignaturas';
import { CrudfirebaseService } from 'src/app/services/firabase/crud.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-adda',
  templateUrl: './adda.page.html',
  styleUrls: ['./adda.page.scss'],
})
export class AddaPage implements OnInit {
  langs: string[] = [];
  idioma!: string;

  asignatura: Iasignaturas = {
    nombre: 'TEST',
    sigla: 'TE020',
    seccion: 'TEST001D'
  }

  constructor(
    private router: Router,
    private fireservices: CrudfirebaseService,
    private translateService: TranslateService
  ) {this.langs = this.translateService.getLangs(); }

  ngOnInit() {
  }
  addasignatura() {
    
    this.fireservices.createAsignatura('Asignaturas', this.asignatura);
    this.router.navigate(['/asignaturas'])
  }
}
