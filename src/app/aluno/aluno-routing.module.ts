import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlunoComponent} from './aluno.component';
import {AlunoDetalheComponent} from './aluno-detalhe/aluno-detalhe.component';
import {AlunoFormComponent} from './aluno-form/aluno-form.component'
import {AuthGuardService} from '../guards/auth-guard.service';

const routes: Routes = [
     {path: 'aluno', component: AlunoComponent, canActivate:[AuthGuardService], children: [
     //{path: '', component: AlunoComponent},
     {path: ':idAluno', component: AlunoDetalheComponent, canActivate:[AuthGuardService] },
     {path: ':idAluno/editar', component: AlunoFormComponent, canActivate:[AuthGuardService]}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
