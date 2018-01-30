import { Injectable } from '@angular/core';

@Injectable()
export class AlunoService {

  constructor() { }

  getAlunos(){
    return[
      {id : 1, nome : 'Marcio Oliveira', email: 'marcio.olifer@gmail.com'},
      {id : 2, nome : 'Lucas Mega', email: 'lucas.mega8514@gmail.com'},
      {id : 3, nome : 'Bruno Marquez', email: 'bruno.marquez@gmail.com'}
    ];
  }

     getAluno(id){
       let alunos = this.getAlunos();
       for(let i = 0; i< alunos.length; i++){
         let aluno = alunos[i];

        if(aluno.id == id){
          return aluno;
        }
       }
       return null;
  }
}
