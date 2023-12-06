import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddalPage } from './addal.page';

const routes: Routes = [
  {
    path: '',
    component: AddalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddalPageRoutingModule {}
