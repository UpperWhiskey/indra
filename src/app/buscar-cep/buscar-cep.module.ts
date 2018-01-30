import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarCepRoutingModule } from './buscar-cep-routing.module';
import {SharedModule} from '../shared/shared.module';
import {BuscarCepComponent} from './buscar-cep.component';

@NgModule({
  imports: [
    CommonModule,
    BuscarCepRoutingModule,
    SharedModule
  ],
  declarations: [BuscarCepComponent]
})
export class BuscarCepModule { }
