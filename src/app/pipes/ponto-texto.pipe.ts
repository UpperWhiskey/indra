import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pontoTexto'
})
export class PontoTextoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // texto 1. texto 2. texto 3
    let explodir  = value.split('.');

    for (let i = 0; i < explodir.length; i++){
      if (i % 2 == 0){
        explodir[i] = explodir[i].toLowerCase();
      }
      else {
        explodir[i] = explodir[i].toUpperCase();
      }
    }

    return explodir.join();
  }

}
