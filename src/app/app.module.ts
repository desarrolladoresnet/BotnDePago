import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { LoginComponent } from './components/login/login.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CustomInterceptor } from './components/utils/interceptor.service';
import { MiHttpXsrfTokenExtractor } from './components/utils/tokenExtractor';

@NgModule({
declarations: [
AppComponent,
LoginComponent,
PagosComponent,
PagarComponent,
ClienteComponent
],
imports: [
HttpClientXsrfModule,
MaterialModule,
BrowserModule,
AppRoutingModule,
BrowserAnimationsModule,
ReactiveFormsModule,
HttpClientModule,
],
providers: [
// { provide: HTTP_INTERCEPTORS, useClass: MiInterceptor, multi: true }
// { provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true },
// { provide: MiHttpXsrfTokenExtractor, useClass: MiHttpXsrfTokenExtractor }
],
bootstrap: [AppComponent]
})
export class AppModule { }