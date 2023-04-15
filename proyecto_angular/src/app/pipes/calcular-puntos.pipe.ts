import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from '../models/interfaces/jugador.interface';

@Pipe({
  name: 'calcularPuntos'
})
export class CalcularPuntosPipe implements PipeTransform {

  transform(jugador: Jugador, ...args: unknown[]): string {

    let puntuacionTotal: number = 0;

    jugador.puntos.forEach((puntos) => {
      puntuacionTotal += puntos;
    })

    return `${jugador.nombre} ha conseguido ${puntuacionTotal} puntos en total`;
  }

}
