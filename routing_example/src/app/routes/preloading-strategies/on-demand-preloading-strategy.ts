import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, of, mergeMap } from 'rxjs';
import { PreloadingService, PreloadingOptions } from '../../services/preloading.service';


@Injectable({
  providedIn:'root'
})
export class OnDemandPreloadingStrategy implements PreloadingStrategy{

  private _preloadDemandOptions$: Observable<PreloadingOptions>;

  constructor(private _preloadingService: PreloadingService){

    this._preloadDemandOptions$ = this._preloadingService.options$;

  }


  private decidirSiPrecargar(route: Route, preloadingOptions: PreloadingOptions):boolean{

    return (
      route.data &&
      route.data['preload'] &&
      [route.path, '*'].includes(preloadingOptions.routePath) &&
      preloadingOptions.preload
    )

  }


  /**
   *
   * @param route es la ruta recibida que deberia cargar el modulo
   * @param load es el callback que carga el modulo
   *
   */
  preload(route: Route, load: () => Observable<any>): Observable<any> {

    return this._preloadDemandOptions$.pipe(
      mergeMap((preloadingOptions: PreloadingOptions) => {
        const precargar: boolean = this.decidirSiPrecargar(route, preloadingOptions);

        console.log(`${precargar ? '' : 'NO'} se precarga el modulo de la ruta ${route.path}`);

        return precargar ? load() : EMPTY
      })
    );
    //Evaluacion que determina:
    //1. Si dentro de la ruta hay un valor llamado 'data'
    //2. si dentro del valor 'data' hay una clave llamada 'preload' a 'true'
    // Entonces, ejecuta el callback y carga el modulo
    // Si no lo tiene, devuelve un Obsevable nulopara que no se precargue el modulo
    // return route.data && route.data['preload'] ? load() : EMPTY;
  }

}
