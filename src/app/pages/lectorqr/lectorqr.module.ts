import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectorqrPageRoutingModule } from './lectorqr-routing.module';

import { LectorqrPage } from './lectorqr.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectorqrPageRoutingModule,
    TranslateModule
  ],
  declarations: [LectorqrPage]
})
export class LectorqrPageModule {}
