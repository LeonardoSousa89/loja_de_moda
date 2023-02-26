import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent   } from './app.component';

import { HttpClientModule } from '@angular/common/http'

import { ProtectedRouteGuard } from './guard/protected-route.guard'
@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProtectedRouteGuard
  ],
  bootstrap: [AppComponent]

})


export class AppModule {}
