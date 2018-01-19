import { Injectable, searchProjects } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

@Injectable()
export class HttpExemploService implements OnInit{

 buscar : Buscar[];

  constructor(private http: Http) { }


 teste(){
  var url = 'https://api.github.com/search/repositories?q=' + this.searchField;
  if(this.searchField){
     return this.http.get(url)
     .map(response => response.json())
     .subscribe(response => {
        this.projects = response.items;
        this.total = response.total_count;
    }
   );
  }
 }
}
