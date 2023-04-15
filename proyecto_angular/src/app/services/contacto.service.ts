import { Injectable } from '@angular/core';

//importamos la lista de contactos MOCK
import { CONTACTOS } from '../mocks/contactos.mock';

import { Contacto } from '../models/interfaces/contacto.interface';

//importamos observable de rxjs
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  constructor() {

  }

  obtenerContactos(): Promise<Contacto[]>{
    return Promise.resolve(CONTACTOS);
  }

  obtenerContactoPorId(id:number): Observable<Contacto> | undefined {

    const contacto = CONTACTOS.find((contacto:Contacto) => contacto.id === id);

    //se crea el observable
    let observable:Observable<Contacto> = new Observable((observer) =>{
      observer.next(contacto);
      observer.complete();
    })

    if(contacto){
      return observable;
    } else{
      return;
    }

  }
}
