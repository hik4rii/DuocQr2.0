import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpdateaPageRoutingModule } from './updatea-routing.module';
import { UpdateaPage } from './updatea.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateaPageRoutingModule,
    TranslateModule
  ],
  declarations: [UpdateaPage]
})
export class UpdateaPageModule {}
