import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export class PreloadingOptions{
  constructor(public routePath: string, public preload: boolean = true) {}
}

@Injectable({
  providedIn: 'root'
})
export class PreloadingService {

  //Un subject es un tipo de observable que permite emitir valores a quien este
  //subscrito al mismo a traves del metodo .next(nuevoValor);
  private _subject = new Subject<PreloadingOptions>();


  public options$ = this._subject.asObservable();

  constructor() { }

  //metodo para hacer la evaluacion de precarga
  comenzarPrecarga(routePath:string){

    const opcionesPrecarga: PreloadingOptions = new PreloadingOptions(routePath,true);

    this._subject.next(opcionesPrecarga);

  }
}
