import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elvis',
  templateUrl: './elvis.component.html',
  styleUrls: ['./elvis.component.css']
})
export class ElvisComponent implements OnInit {

  constructor() { }

  //testar = 'a' || testar == 'w' ? return 110 : return 1

  aluno: any = {
   nome: 'Fabrizio',
    idade: '29',

     cursos:{
       nome: 'Angular 2',
       nota: null,

        professores: {
           nome : 'Alexandre',
           endereco : {
             rua:'Guido Caloi'
      }
    }
  }
};

indra:any={
  pais: {
    nomePais: 'Brasil',
    unidade: {
      endereco: {
        rua: 'Av Guido Caloi',
        telefone: '12345678'
      },
      setor: {
        qtdeFuncionarios: 100,
        projeto: {
          nomeProjeto: 'Projeto Santander',
          clienteNome: 'Santander',
          funcionario: {
            0: {
              nomeFuncionario: 'Matheus',
              idade: 18
            },
            1: {
              nomeFuncionario: 'F2',
              idade: 20
            }
          }
        }
      }
    }
  }
};


  ngOnInit() {
  }

}
