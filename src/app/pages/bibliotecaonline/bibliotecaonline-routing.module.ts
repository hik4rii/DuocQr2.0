import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecaonlinePage } from './bibliotecaonline.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecaonlinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecaonlinePageRoutingModule {}
