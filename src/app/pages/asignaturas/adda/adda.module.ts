import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddaPageRoutingModule } from './adda-routing.module';
import { AddaPage } from './adda.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddaPageRoutingModule,
    TranslateModule
  ],
  declarations: [AddaPage]
})
export class AddaPageModule {}
