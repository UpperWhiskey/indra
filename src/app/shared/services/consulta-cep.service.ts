import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ConsultaCepService {

  constructor(private http: Http) {
  }

  consultarCep(cep) {
    var cep = cep.replace(/\D/g, '');

    if (cep != "") {
      var validaCep = /^[0-9]{8}$/;

      //Valida o formato do Cep
      if (validaCep.test(cep)) {
        return this.http.get('https://viacep.com.br/ws/' + cep + '/json/').map(response => response.json());
      }
    }
  }
}
