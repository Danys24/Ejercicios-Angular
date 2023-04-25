import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export class OptInPreloadingStrategy implements PreloadingStrategy{

  /**
   *
   * @param route es la ruta recibida que deberia cargar el modulo
   * @param load es el callback que carga el modulo
   *
   */
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    //Evaluacion que determina:
    //1. Si dentro de la ruta hay un valor llamado 'data'
    //2. si dentro del valor 'data' hay una clave llamada 'preload' a 'true'
    // Entonces, ejecuta el callback y carga el modulo
    // Si no lo tiene, devuelve un Obsevable nulopara que no se precargue el modulo
    return route.data && route.data['preload'] ? load() : of(null);
  }

}
