import {Component, OnInit, searchProjects} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-http-exemplo',
  templateUrl: './http-exemplo.component.html',
  styleUrls: ['./http-exemplo.component.css']
})


export class HttpExemploComponent implements OnInit {


searchField : string = '';

projects = [];
total = 0;

  constructor(private httpExemploService: HttpExemploService) { }

searchProjects(){
  //chamar o servico - método searchProjects

  return this.searchField = this.searchField.teste();

}

  ngOnInit() {

  }

}
