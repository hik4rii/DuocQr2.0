import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'terms',
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
        loadChildren: () => import('./pages/asignaturas/detalle/detalle.module').then(m => m.DetallePageModule)
      },
      {
        path: 'updatea/:id',
        loadChildren: () => import('./pages/asignaturas/updatea/updatea.module').then(m => m.UpdateaPageModule)
      },
    ]
  },
  
  {
    path: 'lectorqr',
    loadChildren: () => import('./pages/lectorqr/lectorqr.module').then( m => m.LectorqrPageModule)
  },
  {
    path: 'alumnos',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/alumnos/alumnos.module').then( m => m.AlumnosPageModule)      },
      {
        path: 'detallea/:id',
        loadChildren: () => import('./pages/alumnos/detallea/detallea.module').then(m => m.DetalleaPageModule)
      },
      {
        path: 'updateal/:id',
        loadChildren: () => import('./pages/alumnos/updateal/updateal.module').then(m => m.UpdatealPageModule)
      },
    ]
    
  },
  {
    path: 'profesores',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/profesores/profesores.module').then( m => m.ProfesoresPageModule)     },
      {
        path: 'detallep/:id',
        loadChildren: () => import('./pages/profesores/detallep/detallep.module').then(m => m.DetallepPageModule)
      },
      {
        path: 'updatep/:id',
        loadChildren: () => import('./pages/profesores/updatep/updatep.module').then(m => m.UpdatepPageModule)
      },
    ]


    
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'bibliotecaonline',
    loadChildren: () => import('./pages/bibliotecaonline/bibliotecaonline.module').then( m => m.BibliotecaonlinePageModule)
  },
  {
    path: 'presente',
    loadChildren: () => import('./pages/presente/presente.module').then( m => m.PresentePageModule)
  },









];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
