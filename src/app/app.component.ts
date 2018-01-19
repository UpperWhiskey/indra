import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  numero : number = 15;
  numero2 : number = 0;
  destruirCiclo : boolean = false;
  inserir : number = 5

  destruirCicloClick(){
    //primeira forma

    /*if(this.destruirCiclo == true){
      this.destruirCiclo = false;
    }else{
      this.destruirCiclo = true; -->
    }*/

    //segunda forma - operador ternario if else

    //this.destruirCiclo = this.destruirCiclo == true ? false: true;
    this.destruirCiclo = !this.destruirCiclo;

  }

  somarMaisUm(){
    this.numero++;
  }

  adicionarNum(){
    this.inserir++;
  }

  cliqueTexto(evento){
  alert('Indra '+evento)
  }
}
