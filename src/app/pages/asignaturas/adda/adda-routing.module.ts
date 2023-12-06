import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddaPage } from './adda.page';

const routes: Routes = [
  {
    path: '',
    component: AddaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddaPageRoutingModule {}
