import { Component, OnInit } from '@angular/core';

import { Contacts } from '../../models/contacts.interface';

//ActivateRute sirve para acceder a parametros enviados a la ruta y poder renderizarlos
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})

export class ContactDetailPageComponent implements OnInit{

  id: any | undefined;
  contacto:Contacts = {
    id:0,
    nombre:'',
    email:'',
    sexo:'mujer'
  };

  filtroPrevio:string='todos';

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(
      (params:any) => {
        if(params.id){
          this.id = params.id;
        }
      }
    );

    if(history.state.data){
      this.contacto = history.state.data;
    }

    if(history.state.filtro){
      this.filtroPrevio = history.state.filtro;
    }

  }
}
