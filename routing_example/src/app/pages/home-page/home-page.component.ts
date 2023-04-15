import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Contacts } from '../../models/contacts.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  contactoSeleccionado: Contacts | undefined;
  token: string | null = null;

  constructor( private router: Router ){}

  ngOnInit():void {

    //comprobar si existe el token
    this.token = sessionStorage.getItem('token');

    //history lo que hace es leer el historial de navegacion
    if(history.state.data){
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data;
    }

  }

  navegarAContactos():void{

    let navigationExtras: NavigationExtras = {
      queryParams: {
        sexo:'todos'
      }
    }

    this.router.navigate(['contactos'], navigationExtras);
  }
}
