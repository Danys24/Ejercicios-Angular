import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError, Observable, retry, throwError } from 'rxjs';

import { Results } from '../models/randomuser';


@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http:HttpClient) { }

  handleError(error:HttpErrorResponse){

    if(error.status == 0){
      console.error('ha ocurrido un error: ', error.error);
    }else{
      console.error(`error en el backend: ${error.status}. El error es ${error.error}`);
    }

    return throwError( () => new Error('Error en la peticion de contacto aleatorio')
    )

  }

  obtenerRandomUser(): Observable<any>{

    const options = {
      headers: {
        'apiKey': 'YOUR_API_KEY'
      }
    }

    return this.http.get('https://randomuser.me/api').pipe(
      retry(2), //numero de reintentos de peticion
      catchError(this.handleError) // saca el error si falla
    );
  }

  obtenerRandomUsers(n:number, sexo?:string): Observable<Results>{

    let opciones:HttpParams = new HttpParams().set("results", n)

    if(sexo){
      opciones = opciones.append("gender", sexo);
    }


    const options = {
      params: opciones
    }

    return this.http.get<Results>('https://randomuser.me/api', options).pipe(
      retry(2), //numero de reintentos de peticion
      catchError(this.handleError) // saca el error si falla
    );
  }

  /*

  obtenerRandomUsersPorGenero(sexo: string): Observable<any>{
    const opciones:HttpParams = new HttpParams().set("gender", sexo)

    const options = {
      params: opciones
    }

    return this.http.get('https://randomuser.me/api', options).pipe(
      retry(2), //numero de reintentos de peticion
      catchError(this.handleError) // saca el error si falla
    );
  }
  */

}
