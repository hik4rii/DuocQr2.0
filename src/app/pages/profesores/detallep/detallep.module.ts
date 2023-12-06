import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetallepPageRoutingModule } from './detallep-routing.module';
import { DetallepPage } from './detallep.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallepPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetallepPage]
})
export class DetallepPageModule {}
