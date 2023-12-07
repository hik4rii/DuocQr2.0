import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallenotcrudPageRoutingModule } from './detallenotcrud-routing.module';

import { DetallenotcrudPage } from './detallenotcrud.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallenotcrudPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetallenotcrudPage]
})
export class DetallenotcrudPageModule {}
