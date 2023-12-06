import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatepPage } from './updatep.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatepPageRoutingModule {}
