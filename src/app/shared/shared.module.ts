import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { MostrarErroComponent } from './mostrar-erro/mostrar-erro.component';
import { HttpModule } from '@angular/http';
import { ConsultaCepService } from './services/consulta-cep.service';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
  ],

  declarations: [FormDebugComponent, MostrarErroComponent,],

  exports: [
    HttpModule,
    CommonModule,
    ReactiveFormsModule,
    FormDebugComponent,
    MostrarErroComponent,
    FormsModule,
  ],

  providers: [
    ConsultaCepService,
  ]
})
export class SharedModule { }
