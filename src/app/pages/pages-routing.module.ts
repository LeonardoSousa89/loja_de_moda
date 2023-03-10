import { ProtectedRouteGuard } from './../guard/protected-route.guard';
import { AdminComponent } from './admin/admin.component';
import { StoreComponent } from './store/store.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path:'', component: StoreComponent },
  { 
    canActivate: [ProtectedRouteGuard],
    path:'admin', 
    component: AdminComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
