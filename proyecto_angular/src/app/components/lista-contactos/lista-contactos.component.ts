import { Component, OnInit, OnDestroy } from '@angular/core';

import { ContactoService } from 'src/app/services/contacto.service';
import { Contacto } from '../../models/interfaces/contacto.interface';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit{

  listaContactos: Contacto[] = [];
  contactoSeleccionado: Contacto | undefined;

  //subscripcion
  subscripcion: Subscription | undefined;

  //inyectamos el service contacto en el constructor de la clase del componente
  constructor(private contactoService:ContactoService){}

  ngOnInit():void {

    this.contactoService.obtenerContactos()
      .then((lista:Contacto[]) => this.listaContactos = lista)
      .catch((error) => alert(`ha habido un error al recuperar la lista de contactos ${error}`))
      .finally(() => console.log('Peticion Terminada'));

  }

  obtenerContacto(id:number){
    this.subscripcion =  this.contactoService.obtenerContactoPorId(id)
      ?.subscribe((contacto:Contacto) => {
        this.contactoSeleccionado = contacto;
      })
  }

  ngOnDestroy(): void{
    this.subscripcion?.unsubscribe();
  }
}
