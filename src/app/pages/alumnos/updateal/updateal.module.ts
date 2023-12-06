import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UpdatealPageRoutingModule } from './updateal-routing.module';
import { UpdatealPage } from './updateal.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatealPageRoutingModule,
    TranslateModule
  ],
  declarations: [UpdatealPage]
})
export class UpdatealPageModule {}
