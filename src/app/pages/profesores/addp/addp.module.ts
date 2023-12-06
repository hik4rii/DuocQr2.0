import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddpPageRoutingModule } from './addp-routing.module';
import { AddpPage } from './addp.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddpPageRoutingModule,
    TranslateModule
  ],
  declarations: [AddpPage]
})
export class AddpPageModule {}
