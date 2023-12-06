import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateaPage } from './updatea.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateaPageRoutingModule {}
