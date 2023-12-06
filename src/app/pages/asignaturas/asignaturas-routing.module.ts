import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturasPage } from './asignaturas.page';

const routes: Routes = [
  {
    path: '',
    component: AsignaturasPage
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },  {
    path: 'adda',
    loadChildren: () => import('./adda/adda.module').then( m => m.AddaPageModule)
  },
  {
    path: 'updatea',
    loadChildren: () => import('./updatea/updatea.module').then( m => m.UpdateaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignaturasPageRoutingModule {}
