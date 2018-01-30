import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-erro',
  templateUrl: './mostrar-erro.component.html',
  styleUrls: ['./mostrar-erro.component.css']
})
export class MostrarErroComponent implements OnInit {

  constructor() { }


@Input() showError: boolean;
@Input() messageError: any;



  ngOnInit() {
  }

}
