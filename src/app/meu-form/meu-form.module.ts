import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeuFormRoutingModule } from './meu-form-routing.module';

import {MeuFormComponent} from './meu-form.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MeuFormRoutingModule,
    SharedModule,
  ],
  declarations: [MeuFormComponent]
})
export class MeuFormModule { }
