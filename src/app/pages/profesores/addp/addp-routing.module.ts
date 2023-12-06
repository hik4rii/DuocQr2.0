import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddpPage } from './addp.page';

const routes: Routes = [
  {
    path: '',
    component: AddpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddpPageRoutingModule {}
