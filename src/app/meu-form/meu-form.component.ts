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

  ngOnInit() {
  }

}
