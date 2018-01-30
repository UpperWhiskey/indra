import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';
import { Component, OnInit } from '@angular/core';

//
 @Injectable()
export class HttpExemploService implements OnInit{
//
//  buscar : Buscar[];
//
 constructor(private http: Http) { }
ngOnInit(){

}
//
//  teste(){
//   var url = 'https://api.github.com/search/repositories?q=' + this.searchField;
//   if(this.searchField){
//      return this.http.get(url)
//      .map(response => response.json())
//      .subscribe(response => {
//         this.projects = response.items;
//         this.total = response.total_count;
//     }
//    );
//   }
//  }
// }


qualquer(searchField){
var url = 'https://viacep.com.br/ws/'+searchField+'/json/';

if(searchField){
   return this.http.get(url)
   .map(response => response.json())
  }
 }
}
