import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { NomeComponent } from './nome/nome.component';
//import {ClienteComponent} from './cliente.component';
import {ClienteModule} from './cliente/cliente.module';
import {ExerModule} from './exer/exer.module';

import {HttpModule} from '@angular/http';

import {AlertModule} from 'ngx-bootstrap';
import {CalculoComponent} from './calculo/calculo.component';
import {CalculoModule} from './calculo/calculo.module';
// import { IrComponent } from './ir/ir.component'
import {IrModule} from './ir/ir.module';
//import {PontoTextoPipe} from './pipes/ponto-texto.pipe';
import {InputOutputComponent} from './input-output/input-output.component';
import {InputOutput2Component} from './input-output2/input-output2.component';
import {TeclaComponent} from './tecla/tecla.component';
import {AlterarCorDirective} from './diretivas/alterar-cor.directive';
import {DiretivasCorComponent} from './diretivas-cor/diretivas-cor.component';
import {AlterarCorBotaoDirective} from './diretivas/alterar-cor-botao.directive';
import { NgContentComponent } from './ng-content/ng-content.component';
import { ElvisComponent } from './elvis/elvis.component';
import { CicloComponent } from './ciclo/ciclo.component';
import { DiretivasClassStyleComponent } from './diretivas-class-style/diretivas-class-style.component';
import { HttpExemploComponent } from './http-exemplo/http-exemplo.component';
import { MeuFormComponent } from './meu-form/meu-form.component';
import {HttpExemploService} from './http-exemplo/http-exemplo.service';
//módulos organizam componentes

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    NomeComponent,
//    PontoTextoPipe,
    InputOutputComponent,
    InputOutput2Component,
    TeclaComponent,
    AlterarCorDirective,
    DiretivasCorComponent,
    AlterarCorBotaoDirective,
    NgContentComponent,
    ElvisComponent,
    CicloComponent,
    DiretivasClassStyleComponent,
    HttpExemploComponent,
    MeuFormComponent
    // IrComponent,
    //CalculoComponent,
    //ClienteComponent
  ],

  imports:[
    IrModule,
    BrowserModule,
    FormsModule,
    ClienteModule,
    ExerModule,
    AlertModule.forRoot(),
    CalculoModule,
    HttpModule
  ],

  providers: [

    HttpExemploService,

  ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
