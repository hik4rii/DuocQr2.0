import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignaturanotcrudPageRoutingModule } from './asignaturanotcrud-routing.module';

import { AsignaturanotcrudPage } from './asignaturanotcrud.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignaturanotcrudPageRoutingModule,
    TranslateModule
  ],
  declarations: [AsignaturanotcrudPage]
})
export class AsignaturanotcrudPageModule {}
