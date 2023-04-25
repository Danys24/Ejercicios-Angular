import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


//creamos una clase de opciones de precarga
export class PreloadingOptions{
  constructor(public routePath: string, public preload: boolean = true) {}
}

/**
 * SERVICIO PRESONALIZADO PARA LA PRECARGA O NO DE UN MODULO
 */

@Injectable({
  providedIn: 'root'
})
export class PreloadingServiceService {

  //Un subject es un tipo de observable que permite emitir valores a quien este
  //subscrito al mismo a traves del metodo .next(nuevoValor);
  private _subject = new Subject<PreloadingOptions>();


  public options$ = this._subject.asObservable();

  constructor() { }

  //metodo para hacer la evaluacion de precarga
  comenzarPrecarga(routePath:string){

    const opcionesPrecarga: PreloadOptions = new PreloadingOptions(routePath,true);

    this._subject.next(opcionesPrecarga);

  }
}
