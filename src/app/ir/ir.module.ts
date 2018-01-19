import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IrComponent} from './ir.component';
import {IrService} from './ir.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],


  declarations : [IrComponent],
  exports : [IrComponent],
  providers : [IrService]

})
export class IrModule { }
