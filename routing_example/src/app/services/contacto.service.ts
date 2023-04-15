import { Contacts } from '../models/contacts.interface';
import { Injectable } from '@angular/core';
import { LISTA_CONTACTOS } from '../mocks/contacts.mock';

@Injectable({
  providedIn: 'root'
})

export class ContactoService {

  listaContactos:Contacts[] = LISTA_CONTACTOS;

  constructor() { }

  obtenerContactos(sexo?:string): Promise<Contacts[]> {

    if(sexo == 'hombre' || sexo == 'mujer'){

      let listaFiltrada:Contacts[]= this.listaContactos.filter((contacto) => contacto.sexo == sexo);
      return Promise.resolve(listaFiltrada);

    }else if(sexo == 'todos'){

      return Promise.resolve(this.listaContactos);
    }else{

      return Promise.reject('filtro no valido');
    }

  }

}
