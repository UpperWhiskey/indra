import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MeuFormComponent} from './meu-form.component';
import {AuthGuardService} from '../guards/auth-guard.service';

const routes: Routes = [
  {path: 'form', component: MeuFormComponent, canActivate:[AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MeuFormRoutingModule { }
