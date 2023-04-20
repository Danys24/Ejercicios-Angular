import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../models/contacts.interface';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';
import { RandomUserService } from '../../services/random-user.service';
import { Contacto, Results } from '../../models/randomuser';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit{

  cargando:boolean = true;
  filtroSexo: string = 'todos';
//  listaContactos: Contacts[] = [];
  listRandomUser: Contacto[] = [];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private contactoService: ContactoService,
              private randomUserService: RandomUserService){}

  ngOnInit():void{

    //obtener los query Params
    this.route.queryParams.subscribe((params:any) => {
      console.log(params.sexo);

      if(params.sexo){
        this.filtroSexo = params.sexo;


        if(this.filtroSexo === 'female' || this.filtroSexo === 'male'){
          console.log('filtrando por Mujer - Hombre');
          this.randomUserService.obtenerRandomUsers(10, this.filtroSexo).subscribe(
            {
              next: (response:Results) => {
                response.results.forEach((randomContact:Contacto, index:number) => {
                  this.listRandomUser.push(randomContact);
                })
                console.log(this.listRandomUser);
                this.cargando = false;
              },
              error: (error) => console.error(`Error: ${error}`),
              complete: () => console.info('Peticion Terminada')
            }
          )
        }else{
          this.randomUserService.obtenerRandomUsers(10).subscribe(
            {
              next: (response:Results) => {
                response.results.forEach((randomContact:Contacto, index:number) => {
                  this.listRandomUser.push(randomContact)
                })
                console.log(this.listRandomUser);
                this.cargando = false;
              },
              error: (error) => console.error(`Error: ${error}`),
              complete: () => console.info('Peticion Terminada')
            }
          )
        }
      }

      //obtener lista de contactos
      /*
      this.contactoService.obtenerContactos(this.filtroSexo)
        .then((lista) => this.listaContactos = lista)
        .catch((e) => console.error(`ha habido un error ${e}`))
        .finally(() => console.info('peticion terminada'))
      */

    });


  }

  volverHome(contacto:Contacto){

    let navigationExtras:NavigationExtras = {
      state:{
        data: contacto
      }
    }

    this.router.navigate(['/dashboard'], navigationExtras);
  }

}
