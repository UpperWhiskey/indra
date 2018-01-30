import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-form-reativo',
  templateUrl: './form-reativo.component.html',
  styleUrls: ['./form-reativo.component.css']
})
export class FormReativoComponent implements OnInit {


  formComponent: FormGroup;
  constructor(private formBuilder: FormBuilder, private consultaCepService: ConsultaCepService) { }

  ngOnInit() {
    this.formComponent = this.formBuilder.group({
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(6)
        ]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    //console.log(this.formComponent.controls['nome'].valid);

    if (this.formComponent.valid == true) {
      //envia os dados via HTTP
    } else {
      Object.keys(this.formComponent.controls).forEach(campo => {

        const controle = this.formComponent.get(campo);
        if (controle.valid == false) {
          controle.markAsTouched();
        }

      });
    }
  }

  isError(campo: string) {
    return (this.formComponent.controls[campo].valid == false
      &&
      this.formComponent.controls[campo].touched == true);
  }

  aplicarCssElemento(campo: string) {
    return {
      'has-error': this.isError(campo),
      'has-success': this.isSuccess(campo)
    };
  }

  isSuccess(campo: string) {
    return (this.formComponent.controls[campo].valid == true && this.formComponent.controls[campo].touched == true);
  }

  consultarCep() {
    this.consultaCepService.consultarCep('03332060').subscribe(response => {
      console.log(response);
      this.formComponent.patchValue({
        logradouro: response.logradouro,
        complemento: response.complemento,
        bairro: response.bairro,
        estado: response.localidade
      });
    });
  }
}
