import { Component, OnInit } from '@angular/core';
import {NgForm, Form} from '@angular/forms';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpExemploService} from '../http-exemplo/http-exemplo.service';

@Component({
  selector: 'app-buscar-cep',
  templateUrl: './buscar-cep.component.html',
  styleUrls: ['./buscar-cep.component.css']
})
export class BuscarCepComponent implements OnInit {

  constructor(private http: Http, private httpExemploService: HttpExemploService) { }

//Continue

  buscar(searchField, f){
           this.httpExemploService.qualquer(searchField).subscribe(response => {
              f.form.patchValue({
                  cep: response.cep,
                  logradouro: response.logradouro,
                  bairro: response.bairro,
                  uf: response.uf,
              });
  })
 }




onSubmit(f:NgForm){
    var urlDados = 'https://httpbin.org/post';
    console.log(f);

     this.http.post(urlDados, JSON.stringify(f.value))
     .map(response => response)
     .subscribe(dados => {
       //alert(JSON.stringify(dados));
     });
}





  ngOnInit() {
  }
}
