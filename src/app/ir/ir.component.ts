import { Component, OnInit } from '@angular/core';
import {IrService} from './ir.service'

@Component({
  selector: 'app-ir',
  templateUrl: './ir.component.html',
  styleUrls: ['./ir.component.css']
})
export class IrComponent implements OnInit {

irValor: number;
salario : number;


  constructor(private irService: IrService) {

   }

   calcularIr(){
     this.irValor = this.irService.calcularIr(this.salario);
   }

     ngOnInit() {
     }

}
