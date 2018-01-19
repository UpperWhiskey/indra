import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClienteComponent} from './cliente.component';
import {ClienteService} from './cliente.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClienteComponent],
  exports:[ClienteComponent],
  providers:[ClienteService]
})
export class ClienteModule{} 
