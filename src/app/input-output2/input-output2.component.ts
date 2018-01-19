import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output2',
  templateUrl: './input-output2.component.html',
  styleUrls: ['./input-output2.component.css']
})
export class InputOutput2Component implements OnInit {


  constructor(){}

  @Output() meuClique = new EventEmitter();


clique(){
   this.meuClique.emit("MENSAGEM!!!!");
}

  ngOnInit() {

  

  }

}
