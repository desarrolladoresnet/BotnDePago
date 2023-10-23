import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LoginComponent } from './components/login/login.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { ClienteComponent } from './components/cliente/cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagosComponent,
    PagarComponent,
    ClienteComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'getlletita',
    //   headerName: 'cabeza',
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
