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
return [
  {id: 1, nome: 'Indra', descricao : 'Indra Company'},
  {id: 2, nome: 'Vivo', descricao : 'Vivo Telefonia'},
  {id: 3, nome: 'Original', descricao : 'Banco Original'},
];
}

  getCliente(id:number){
   let clientes = this.getClientes();

   for(let i = 0; i < clientes.length; i++){
     let cliente = clientes[i];

      if(cliente.id == id){
        return cliente;
      }
   }
   return null;
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
