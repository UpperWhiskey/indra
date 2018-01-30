import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormReativoRoutingModule } from './form-reativo-routing.module';
import { FormReativoComponent } from './form-reativo.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    FormReativoRoutingModule,
    SharedModule
  ],
  declarations: [FormReativoComponent],
})
export class FormReativoModule { }
