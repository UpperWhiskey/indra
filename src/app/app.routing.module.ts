import {RouterModule, Routes} from '@angular/router';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {ExerComponent} from './exer/exer.component';
import {MeuFormComponent} from './meu-form/meu-form.component';
import {AuthGuardService} from './guards/auth-guard.service';
//import {ClienteComponent} from './cliente/cliente.component';

//import {ExerComponent} from './exer/exer.component';
//import {IrComponent} from '.ir/ir.component';

//import {FormDebugComponent} from './form-debug/form-debug.component';
//import {ClienteDetalheComponent} from './cliente/cliente-detalhe/cliente-detalhe.component';
//import {BuscarCepComponent} from './buscar-cep/buscar-cep.component';
//import {ClienteNaoEncontradoComponent} from './cliente/cliente-nao-encontrado/cliente-nao-encontrado.component';


const APP_ROUTES : Routes = [

    {path: '', redirectTo : '/form', pathMatch : 'full'},
    //{path: 'form', component: MeuFormComponent},
    //{path: 'buscar-cep', component: BuscarCepComponent},
    {path: '', loadChildren: './aluno/aluno.module#AlunoModule', canActivate:[AuthGuardService]},
    {path: 'alunos', loadChildren: './alunos/alunos.module#AlunosModule', canActivate: [AuthGuardService]},
     //{path: 'clientes', component: ClienteComponent},
    //{path: 'cliente/:idCliente', component: ClienteDetalheComponent},
    //{path: 'cliente-nao-encontrado/:idCliente', component: ClienteNaoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
