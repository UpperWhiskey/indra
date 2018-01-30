import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-nao-encontrado',
  templateUrl: './cliente-nao-encontrado.component.html',
  styleUrls: ['./cliente-nao-encontrado.component.css']
})
export class ClienteNaoEncontradoComponent implements OnInit {

inscricao : any;
idCliente: any;
cliente: any;

  constructor(private route : ActivatedRoute, private clienteService: ClienteService, private router: Router) {
  console.log(route);

  }

  ngOnInit() {

  this.inscricao = this.route.params.subscribe((params: any) => {
     this.idCliente = params['idCliente'];

  //this.idEmpresa = params['idEmpresa'];

      this.cliente = this.clienteService.getCliente(this.idCliente);
      if(this.cliente == null){
        this.router.navigate(['/cliente-nao-encontrado/', this.idCliente]);
      }
   });
   }
}
