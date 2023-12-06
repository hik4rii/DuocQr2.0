import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallepPage } from './detallep.page';

const routes: Routes = [
  {
    path: '',
    component: DetallepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallepPageRoutingModule {}
