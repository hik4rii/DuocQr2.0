import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleaPage } from './detallea.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleaPageRoutingModule {}
