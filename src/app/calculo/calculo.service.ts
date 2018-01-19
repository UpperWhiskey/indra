import { Injectable } from '@angular/core';

@Injectable()
export class CalculoService {

imc: number

  constructor() { }

  calcularImc(peso: number,altura:number){
   altura = this.converterCMtoM(altura);

   this.imc = peso  / (altura * altura);

   return this.imc;

 }

  converterCMtoM(altura:number){
   altura = altura/100;
   return altura;

  }

}
