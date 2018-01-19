import { Component, OnInit } from '@angular/core';
import {CalculoService} from './calculo.service'


@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})

export class CalculoComponent implements OnInit {
peso:number;
altura:number;
imc:number;
nome:string = 'Grande Porte';
texto:string = 'A vida é Bela. Amo Doritos. O céu é azul';
dataNascimento = Date();

  constructor(private calculoService : CalculoService){

}

calcularButton(){
  this.imc = this.calculoService.calcularImc(this.altura, this.peso)
}

  ngOnInit() {
  }

}
