import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro',
  templateUrl: './primeiro.component.html',
  styleUrls: ['./primeiro.component.css']
})


export class PrimeiroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

url = 'https://www.grandeporte.com.br';
urlImage = 'https://www.grandeporte.com.br/img/ead.jpeg';

clicar(){

alert("Olá");

 }
}
