import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddalPageRoutingModule } from './addal-routing.module';
import { AddalPage } from './addal.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddalPageRoutingModule,
    TranslateModule
  ],
  declarations: [AddalPage]
})
export class AddalPageModule {}
