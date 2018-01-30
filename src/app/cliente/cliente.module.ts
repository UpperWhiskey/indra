import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClienteComponent} from './cliente.component';
import {ClienteService} from './cliente.service';
import {RouterModule}  from '@angular/router';
import {ClienteDetalheComponent} from './cliente-detalhe/cliente-detalhe.component';
import {ClienteNaoEncontradoComponent} from './cliente-nao-encontrado/cliente-nao-encontrado.component';
import {ClienteRoutingModule} from './cliente.routing.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ClienteRoutingModule
  ],
  declarations: [
    ClienteComponent,
    ClienteNaoEncontradoComponent,
    ClienteDetalheComponent
  ],
  exports:[ClienteComponent],
  providers:[ClienteService]
})
export class ClienteModule{}
