import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginPage } from './pages/login/login.page';
import { UsuarioService } from './services/usuarios/usuario.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  langs: string[] = [];
  idioma!: string;

  public appPages = [
    { titulo: 'Inicio', title: 'Home', titlejp: 'ホーム', url: 'home', icon: 'home' },
    { titulo: 'Asignaturas', title:'Subjects', titlejp: '科目', url: 'asignaturas', icon: 'book' },
    { titulo: 'Escanear QR', title:'QR Scanning', titlejp: 'QRスキャン', url: 'lectorqr', icon: 'qr-code' },
    { titulo: 'Cerrar Sesion ', title:'Log Out', titlejp:'ログアウト', url: 'login', icon: 'log-out' },
  ];

  public appprofe = [
    { titulo: 'Inicio', title: 'Home', titlejp: 'ホーム', url: 'home', icon: 'home' },
    { titulo: 'Asignaturas', title:'Subjects', titlejp: '科目', url: 'asignaturanotcrud', icon: 'book' },
    { titulo: 'Cerrar Sesion ', title:'Log Out', titlejp:'ログアウト', url: 'login', icon: 'log-out' },
  ];

  public appalumno = [
    { titulo: 'Inicio', title: 'Home', titlejp: 'ホーム', url: 'home', icon: 'home' },
    { titulo: 'Asignaturas', title:'Subjects', titlejp: '科目', url: 'asignaturanotcrud', icon: 'book' },
    { titulo: 'Escanear QR', title:'QR Scanning', titlejp: 'QRスキャン', url: 'lectorqr', icon: 'qr-code' },
    { titulo: 'Biblioteca Online', title:'Online Library', titlejp:'オンラインライブラリ', url: 'bibliotecaonline', icon: 'book' },
    { titulo: 'Cerrar Sesion ', title:'Log Out', titlejp:'ログアウト', url: 'login', icon: 'log-out' },
  ];

  public appadmin = [
    { titulo: 'Inicio', title: 'Home', titlejp: 'ホーム', url: 'home', icon: 'home' },
    { titulo: 'Asignaturas', title:'Subjects', titlejp: '科目', url: 'asignaturas', icon: 'book' },
    { titulo: 'Profesores', title : "Teachers", titlejp : "先生", url: 'profesores', icon: 'people' },
    { titulo: 'Alumnos', title : "Students", titlejp : "学生", url: 'alumnos', icon: 'people' },
    { titulo: 'Cerrar Sesion ', title:'Log Out', titlejp:'ログアウト', url: 'login', icon: 'log-out' },
  ];


  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private router: Router, public translateService: TranslateService, public usuarioService: UsuarioService) {
    this.translateService.setDefaultLang('Español');
    this.translateService.addLangs(['English','Japanese']);
    this.translateService.use('Español');
    this.langs = this.translateService.getLangs();
  }


  mostrarMenuProfesor() {
    return this.router.url !== '/login';
  }

  mostrarMenuAlumno() {
    return this.router.url !== '/login';
  }

  checkedbtn : boolean = false

  changeEvent(event:any) {
    if (event.value) {
      this.checkedbtn = false;
    }else{
      this.checkedbtn = true;
    }
}

changeLang(event:any){
  this.translateService.use(event.detail.value)
  }
  
}
