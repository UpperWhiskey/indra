import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalculoComponent} from './calculo.component';
import {CalculoService} from './calculo.service';
import {FormsModule} from '@angular/forms';
import {MeuPipePipe} from '../pipes/meu-pipe.pipe';
import {PontoTextoPipe} from '../pipes/ponto-texto.pipe';


@NgModule({

  imports: [
    CommonModule,
    FormsModule
  ],

  declarations : [CalculoComponent, MeuPipePipe, PontoTextoPipe],
  exports : [CalculoComponent],
  providers : [CalculoService]
})

export class CalculoModule { }
