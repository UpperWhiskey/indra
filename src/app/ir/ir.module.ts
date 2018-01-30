import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IrService} from './ir.service';

import {IrComponent} from './ir.component';

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
