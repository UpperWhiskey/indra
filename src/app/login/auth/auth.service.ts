import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {


  usuarioEstaLogado: boolean;
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private route: Router) { }

  fazerLogin(login: string, senha: string) {
    if (login == 'abc' && senha == 'abc') {
      this.usuarioEstaLogado = true;

      this.mostrarMenuEmitter.emit(true);

      this.route.navigate(['/']);

      return true;
    } else {
      this.usuarioEstaLogado = false;
      this.mostrarMenuEmitter.emit(false);
      return false;
    }
  }

  getUsuarioEstaLogado() {
    return this.usuarioEstaLogado;
  }
}
