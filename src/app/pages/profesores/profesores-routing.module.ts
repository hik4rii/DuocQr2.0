import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesoresPage } from './profesores.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesoresPage
  },
  {
    path: 'addp',
    loadChildren: () => import('./addp/addp.module').then( m => m.AddpPageModule)
  },
  {
    path: 'updatep',
    loadChildren: () => import('./updatep/updatep.module').then( m => m.UpdatepPageModule)
  },
  {
    path: 'detallep',
    loadChildren: () => import('./detallep/detallep.module').then( m => m.DetallepPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesoresPageRoutingModule {}
