import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturanotcrudPage } from './asignaturanotcrud.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturanotcrudPage
  },
  {
    path: 'detallenotcrud',
    loadChildren: () => import('./detallenotcrud/detallenotcrud.module').then( m => m.DetallenotcrudPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturanotcrudPageRoutingModule {}
