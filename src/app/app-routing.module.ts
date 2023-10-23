import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'asignaturas',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
      },
      {
        path: 'detalle/:id',
        loadChildren: () => import('./pages/asignaturas/detalle/detalle.module').then( m => m.DetallePageModule)
      }
    ]
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'lectorqr',
    loadChildren: () => import('./pages/lectorqr/lectorqr.module').then( m => m.LectorqrPageModule)
  },
  {
    path: 'bibliotecaonline',
    loadChildren: () => import('./pages/bibliotecaonline/bibliotecaonline.module').then( m => m.BibliotecaonlinePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
