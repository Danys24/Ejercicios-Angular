import { Component, OnInit } from '@angular/core';

import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ejemplo-animacion',
  templateUrl: './ejemplo-animacion.component.html',
  styleUrls: ['./ejemplo-animacion.component.scss'],

  //metadatos para animacion del componente
  animations: [
    trigger('animaciones', [
      state('active', style({
        transform: 'translate(10px, 20px)'
      })),
      state('inactive', style({
        transform: 'translate(40px, 50px)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class EjemploAnimacionComponent implements OnInit{

  state:string = 'inactive';

  constructor(){}

  ngOnInit(): void {

    setInterval(() => {
      if(this.state == 'active'){
        this.state = 'inactive';
      }else{
        this.state = 'active';
      }

    }, 1000)

    /*
    setTimeout(() => {
      this.state = 'active';
    }, 500);
    */

  }

}
