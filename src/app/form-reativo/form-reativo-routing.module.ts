import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormReativoComponent} from './form-reativo.component';


const routes: Routes = [

{path: 'form-reativo', component: FormReativoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormReativoRoutingModule { }
