import { Directive, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLifeCycle]'
})
export class LifeCycleDirective implements OnInit, OnChanges, OnDestroy{

  constructor() { }

  ngOnInit():void{
    this.lifeCycle('onInit');
  }

  ngOnChanges(changes:SimpleChanges): void{
    this.lifeCycle('onChanges');
    console.log('onChanges');
  }

  ngOnDestroy():void{
    this.lifeCycle('onDestroy');
  }

  lifeCycle(hook:string, changes?:SimpleChanges){
    console.log(`CICLO DE VIDA: ${hook}`);
    if(changes){
      console.log(`cambios: ${changes}`);
    }
  }

}
