import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generaqr',
  templateUrl: './generaqr.page.html',
  styleUrls: ['./generaqr.page.scss'],
})
export class GeneraqrPage implements OnInit {

  public myAngularxQrCode: string = "";

  constructor() {
    this.myAngularxQrCode = 'Datos para el código';
   }

  ngOnInit() {
  }

}
