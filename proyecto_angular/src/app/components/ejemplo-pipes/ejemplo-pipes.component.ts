import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/interfaces/jugador.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})

export class EjemploPipesComponent implements OnInit{

  dob: Date = new Date(1991, 9, 14);
  cambio: boolean = true;
  nombre: string = 'Danys';
  numero_PI: number = 3.141592653589;
  precioCarrito:number = 100;
  persona: Jugador = {
    nombre: 'Pedro',
    puntos: [10, 40, 3]
  }

  //ejemplo para pipe calcular puntuacion
  jugador1: Jugador = {
    nombre: 'Danys',
    puntos: [10, 20, 30]
  }

  jugador2: Jugador = {
    nombre: 'Pepe',
    puntos: [0, 80, 13]
  }

  cantidad:number = 0.35;
  textoLargo:string = 'lorem sadasfsa asadfasdfsdf eafasdaefdawef asdfasefawefae';

  constructor(){}

  ngOnInit():void{

  }

  get dateFormat(){
    return this.cambio ? 'shortDate' : 'fullDate'
  }

  cambiarFormato(){
    this.cambio = !this.cambio;
  }

}
