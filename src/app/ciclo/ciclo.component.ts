import { Input, Component, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked {

@Input() contador: number = 10;
@Input() contador2: number = 5;
@Input() nome : string;


  constructor() {
   console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck(){
    console.log('ngDoCheck');
    if(this.contador == 20){
      alert("Saiu");
  }
}
  ngOnDestroy(){
    console.log('ngOnDestroy');
  }

   ngAfterContentInit(){
     console.log('ngAfterContentInit');
   }

   ngAfterContentChecked(){
     console.log('ngAfterContentChecked');
   }

   ngAfterViewChecked(){
     console.log('AfterViewChecked');
   }
}
   //private logIt(msg: string){
     //this.logger.log
   //}
