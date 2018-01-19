import { Injectable } from '@angular/core';

@Injectable()
export class ClienteService {


  constructor( ) { }

  nome = "";
  sobreNome = "";
  pedido = "";
  altura: number;
  peso: number;
  imc: number;
  teste: any;


getClientes(){

return ['Cliente 1', 'Cliente 2', 'Cliente 3'];

 }

 confirmaPedido(){

 //if( this.nome == "" || this.sobreNome == "" || this.pedido == ""){

 //}

 if(confirm(this.nome+" Seu pedido ficou da seguinte forma: "+this.pedido+". Deseja confirmar?")){
   alert("Pedido confirmado com sucesso")

 }else{

  alert("Pedido cancelado")

   }
  }

 calcular(){


   if(this.altura == undefined || this.peso == undefined){
      alert("Campos vazios");
    }else{

      this.imc = (this.peso/(this.altura*this.altura));

    }

   }

 }
