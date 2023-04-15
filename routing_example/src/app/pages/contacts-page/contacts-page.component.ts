import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../models/contacts.interface';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{

  filtroSexo: string = 'todos';
  listaContactos: Contacts[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private contactoService: ContactoService){}

  ngOnInit():void{

    //obtener los query Params
    this.route.queryParams.subscribe((params:any) => {
      console.log(params.sexo);

      if(params.sexo){
        this.filtroSexo = params.sexo;
      }

      //obtener lista de contactos
      this.contactoService.obtenerContactos(this.filtroSexo)
        .then((lista) => this.listaContactos = lista)
        .catch((e) => console.error(`ha habido un error ${e}`))
        .finally(() => console.info('peticion terminada'))
    });

  }

  volverHome(contacto:Contacts){

    let navigationExtras:NavigationExtras = {
      state:{
        data: contacto
      }
    }

    this.router.navigate(['/home'], navigationExtras);
  }

}
