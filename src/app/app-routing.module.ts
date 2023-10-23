import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PagarComponent } from './components/pagar/pagar.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  // {path: '', component: LoginComponent},
  {path: '', component: ClienteComponent},
  {path: 'pagar', component: PagarComponent},
  {path: 'pagos', component: PagosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
