import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatealPage } from './updateal.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatealPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatealPageRoutingModule {}
