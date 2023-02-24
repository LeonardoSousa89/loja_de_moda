import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

//components
import { HeaderComponent } from './../components/header/header.component';
import { FooterComponent } from './../components/footer/footer.component';

//pages
import { StoreComponent } from './store/store.component';

@NgModule({
  declarations: [
    StoreComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
