import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoService } from './aluno.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AlunoRoutingModule,
    FormsModule,
  ],
  declarations: [
    AlunoComponent,
    AlunoDetalheComponent,
    AlunoFormComponent,
  ],

  providers:[
    AlunoService,
  ]
})

export class AlunoModule { }
