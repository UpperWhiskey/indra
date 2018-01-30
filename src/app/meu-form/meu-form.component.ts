import { Component, OnInit } from '@angular/core';
import {Form} from '@angular/forms'

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  constructor() { }

  onSubmit(f : Form){
    console.log(f);
  }

  isSuccess(campo){
    return (campo.valid == true && campo.touched==true);
  }

  isError(campo){
    return (campo.valid == false && campo.touched == true);
  }

  aplicarCssElemento(campo){
    return {'has-error':this.isError(campo),
    'has-success' : this.isSuccess(campo)};
  }

  ngOnInit() {
  }

}
