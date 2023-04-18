import { Pipe, PipeTransform } from '@angular/core';
import { Contacts } from '../models/contacts.interface';
import { Contacto } from '../models/randomuser';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: Contacto, ...args: unknown[]): string {
    return `${contacto.name.first} ${contacto.name.last}`;
  }

}
