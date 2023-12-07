import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallenotcrudPage } from './detallenotcrud.page';

const routes: Routes = [
  {
    path: '',
    component: DetallenotcrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallenotcrudPageRoutingModule {}
