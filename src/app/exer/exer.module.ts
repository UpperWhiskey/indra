import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerComponent } from './exer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExerComponent],
  exports:[ExerComponent]
})
export class ExerModule { }
