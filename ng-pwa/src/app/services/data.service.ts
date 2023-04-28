import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  obtenerFraseAleatoria():Observable<any>{
    return this._http.get('https://api.chucknorris.io/jokes/random');
  }
}
