import { Component, OnInit } from '@angular/core';

import { DataService } from './services/data.service';

//Imports necesarios para trabajar con Service Worker
import {SwUpdate} from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-pwa';

  chiste:string = '';

  constructor(private _swUpdate: SwUpdate, private _dataService: DataService){}

  ngOnInit():void{

    //recarga la cache al ininciarse
    this.recargarCache();

  }


  //metodo encargado de mostrar una alerta al usuario cuando
  // el service worker detecte una nueva version disponible
  recargarCache(){

    //comprobamos si el service worker esta activo
    if(this._swUpdate.isEnabled){
      this._swUpdate.versionUpdates.subscribe(
        {
          next: () => {

            if(confirm('hay una version de la aplicacion. ¿Deseas Cargarla?')){
              //le decimos al service worker que active la nueva version
              this._swUpdate.activateUpdate()
                .then((value:boolean) => {

                  //si el usuario dice que si a la recarga actualizamos la ventana limpiando la cache
                  //para que el service worker capture los nuevos camobios y los registre
                  window.location.reload()

                })
                .catch((error:any) => console.error(`ha ocurrido un error con la nueva version: ${error}`))
                .finally(() => console.log('Nueva version activada'))
            }

          },
          error: (error) => {
            console.log(`ha ocurrido un error: ${error}`)
          },
          complete: () => console.log('Recarga finalizada de la nueva version')
        }
      );
    }

  }

  obtenerNuevoChiste(){
    this._dataService.obtenerFraseAleatoria().subscribe(
      {
        next: (respuesta:any) => {
          this.chiste = respuesta.value
        },
        error: (error:any) => console.log(`Ha ocurrido un error: ${error}`),
        complete: () => console.log('Peticion terminada')
      }
    )
  }

}
