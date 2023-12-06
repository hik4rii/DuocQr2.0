import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetalleaPageRoutingModule } from './detallea-routing.module';
import { DetalleaPage } from './detallea.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleaPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetalleaPage]
})
export class DetalleaPageModule {}
