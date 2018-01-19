import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tecla',
  templateUrl: './tecla.component.html',
  styleUrls: ['./tecla.component.css']
})
export class TeclaComponent implements OnInit {

  constructor() { }

@Output() entrada = new EventEmitter;

teste: any;

saida(){

  this.entrada.emit(this.teste);

}

  ngOnInit() {
  }

}
