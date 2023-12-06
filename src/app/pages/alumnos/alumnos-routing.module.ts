import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosPage } from './alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosPage
  },
  {
    path: 'addal',
    loadChildren: () => import('./addal/addal.module').then( m => m.AddalPageModule)
  },
  {
    path: 'detallea',
    loadChildren: () => import('./detallea/detallea.module').then( m => m.DetalleaPageModule)
  },
  {
    path: 'updateal',
    loadChildren: () => import('./updateal/updateal.module').then( m => m.UpdatealPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosPageRoutingModule {}
