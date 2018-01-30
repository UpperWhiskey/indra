import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuscarCepComponent} from './buscar-cep.component';
import {AuthGuardService} from '../guards/auth-guard.service';

const routes: Routes = [
  {path: 'buscar-cep', component: BuscarCepComponent, canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarCepRoutingModule { }
