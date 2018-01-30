import {RouterModule, Routes} from '@angular/router';
import {NgModule, ModuleWithProviders} from '@angular/core';
import {ClienteComponent} from './cliente.component';
import {ClienteDetalheComponent} from './cliente-detalhe/cliente-detalhe.component';
import {ClienteNaoEncontradoComponent} from './cliente-nao-encontrado/cliente-nao-encontrado.component';
import {AuthGuardService} from '../guards/auth-guard.service';

const CLIENTE_ROUTES : Routes = [
    {path: 'clientes', component: ClienteComponent, canActivate:[AuthGuardService]},
    {path: 'cliente/:idCliente', component: ClienteDetalheComponent, canActivate:[AuthGuardService]},
    {path: 'cliente-nao-encontrado/:idCliente', component: ClienteNaoEncontradoComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forChild(CLIENTE_ROUTES)],
  exports: [RouterModule]
})

export class ClienteRoutingModule{}
