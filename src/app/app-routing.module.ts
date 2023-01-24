import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './components/pages/error/error.component';
import { StoreComponent } from './components/pages/store/store.component';
import { AdminComponent } from './components/pages/admin/admin.component';


const routes: Routes = [

  { path:"",        component: StoreComponent, pathMatch: "full" },
  { path:"admin",   component: AdminComponent },
  { path: "error",  component: ErrorComponent },
  { path: "**",     component: ErrorComponent }

];


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }
