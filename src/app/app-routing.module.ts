import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    loadChildren: ()=>import('./components/store/store.module').then(module=>module.StoreModule)
  },{
    path:'admin',
    loadChildren: ()=>import('./core/admin/admin.module').then(module=>module.AdminModule)
  },{
    path: 'error',
    loadChildren: ()=>import('./components/error/error.module').then(module=>module.ErrorModule)
  },{
    path:'**',
    loadChildren: ()=>import('./components/error/error.module').then(module=>module.ErrorModule)
  }

];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }
