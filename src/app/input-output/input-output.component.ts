import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
  inputs: ['numero']
})
export class InputOutputComponent implements OnInit {

@Input('address') endereco : any; numero: any;

@Output() myClick = new EventEmitter();

callClick(){

this.myClick.emit('Indra');

}

  constructor() { }

  ngOnInit() {
  }

}
