import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

export declare var navigator:any;


@Injectable(
  {
    providedIn: 'root'
  }
)
export class NetworkAwarePreloadStrategy implements PreloadingStrategy{

  //metod para gestonar la precarga
  preload(route: Route, load: () => Observable<any>): Observable<any>{
    //comprueba que haya una buena conexion
    //si hay buena conexion deulve true y carga el mddulo
    //si no hay buena conexion no devuelve nada y no carga el modulo
    return this.hasGoodConnection() ? load() : EMPTY;
  }

  hasGoodConnection(): boolean {
    //se Obtine la conexion
    const conn = navigator.connection;

    //En caso de que tengamos conexion
    if(conn){
      //se comprueba si el usuario tiene habilitado reserva de datos (movil)
      //En ese caso, no cargamos el modulo
      if(conn.saveData) {
        return false;
      }

      //Lista de conexiones no validas para cargar el modulo
      const avoidTheseConnections = ['slow-2g', '2g' /* , '3g', '4g',  */];
      //Obtenemos el tipo de conexion que tiene el usuario
      const effectiveType = conn.effectiveType || '';

      //se comprueba que la conexion del usuario esta en la lista a evitar
      //si es asi no se carga el modulo
      if(avoidTheseConnections.includes(effectiveType)){
        return false;
      }
    }

    //si la conexion es buena se precarga el modulo
    return true;
  }
}
