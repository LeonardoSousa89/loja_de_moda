import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    loadChildren: ()=>import('./pages/pages.module').then(module=>module.PagesModule)
  }, {
    path: 'admin',
    loadChildren: ()=>import('./pages/pages.module').then(module=>module.PagesModule)
  },{
    path:'login',
    loadChildren: ()=>import('./pages/core/core.module').then(module=>module.CoreModule)
  },{
    path: 'error',
    loadChildren: ()=>import('./pages/error/error.module').then(module=>module.ErrorModule)
  },{
    path: '**',
    loadChildren: ()=>import('./pages/error/error.module').then(module=>module.ErrorModule)
  }

];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }
