import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Asignaturas', url: 'asignaturas', icon: 'book' },
    { title: 'Escanear QR', url: 'lectorqr', icon: 'qr-code' },
    { title: 'Biblioteca Online', url: 'bibliotecaonline', icon: 'book' },
    { title: 'Cerrar Session ', url: 'login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
