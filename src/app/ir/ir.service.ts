import { Injectable } from '@angular/core';

@Injectable()
export class IrService {


  constructor() { }

  calcularIr(salario: number){

let irF;

   if(salario <= 1900){
    return 0;
  }else if(salario >= 1901 || salario <= 2800){
    irF = salario * 7.5 / 100;
    return irF
  }else if(salario > 2800 || salario <= 3.750){
    salario = salario * 15 / 100;
    return irF
  }else if(salario >= 3751 || salario <= 4700){
    return irF;
  }else if(salario > 4700){
  salario = salario * 27 / 100;
    return irF;
  }
 }
}
