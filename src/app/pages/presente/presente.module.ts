import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentePageRoutingModule } from './presente-routing.module';

import { PresentePage } from './presente.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentePageRoutingModule,
    TranslateModule
  ],
  declarations: [PresentePage]
})
export class PresentePageModule {}
