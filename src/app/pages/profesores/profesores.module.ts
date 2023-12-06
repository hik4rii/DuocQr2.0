import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfesoresPageRoutingModule } from './profesores-routing.module';
import { ProfesoresPage } from './profesores.page';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesoresPageRoutingModule,
    TranslateModule
  ],
  declarations: [ProfesoresPage]
})
export class ProfesoresPageModule {}
