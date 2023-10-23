import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecaonlinePageRoutingModule } from './bibliotecaonline-routing.module';

import { BibliotecaonlinePage } from './bibliotecaonline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecaonlinePageRoutingModule,
    FormsModule
  ],
  declarations: [BibliotecaonlinePage]
})
export class BibliotecaonlinePageModule {}
