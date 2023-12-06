import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpdatepPageRoutingModule } from './updatep-routing.module';
import { UpdatepPage } from './updatep.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatepPageRoutingModule,
    TranslateModule
  ],
  declarations: [UpdatepPage]
})
export class UpdatepPageModule {}
