import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[appAlterarCorBotao]'
})
export class AlterarCorBotaoDirective {

  constructor(private elementRef : ElementRef, renderer:Renderer){

let color;

 switch(Math.floor(Math.random() * 4)){
    case 0: color = "btn-warning"; break;
    case 1: color = "btn-success"; break;
    case 2: color = "btn-error"; break;
    case 4: color = "btn-info"; break;
    case 5: color = "btn-danger"; break;

    }

    renderer.setElementClass(elementRef.nativeElement, color, true);

  }
}
