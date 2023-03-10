import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { FormsModule } from '@angular/forms';

//components
import { HeaderComponent } from './../components/header/header.component';
import { FooterComponent } from './../components/footer/footer.component';

//pages
import { StoreComponent } from './store/store.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    StoreComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
