import { Directive, ElementRef, Renderer,  HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAlterarCor]'
})

export class AlterarCorDirective {
  @HostBinding('style.background-color') cor: string;

  @HostListener('click') meuClick(){
   alert('Host Listener');
  }

  @HostListener('mouseover') mouseSobre(){

   this.cor = 'yellow'

  }

  @HostListener('mouseouts') onmouseleave(){

    this.cor = 'grey'

  }


  constructor(private elementRef : ElementRef, private renderer:Renderer){

let color: string;

 switch(Math.floor(Math.random() * 4)){
    case 0: color = "blue"; break;
    case 1: color = "green"; break;
    case 2: color = "red"; break;
    case 4: color = "yellow"; break;
    case 5: color = "grey"; break;
    case 6: color = "orange"; break;
    case 7: color = "purple"; break;
    case 8: color = "black"; break;
    case 9: color = "brown"; break;
    case 10: color = "pink"; break;
    }

     renderer.setElementStyle(elementRef.nativeElement, 'background-color', color);
    

  }
}
