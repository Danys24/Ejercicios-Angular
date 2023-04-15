import { Component } from '@angular/core';


export type Producto = {
  nombre: string,
  precio: number,
  descripcion: string
}

@Component({
  selector: 'app-lista-basica',
  templateUrl: './lista-basica.component.html',
  styleUrls: ['./lista-basica.component.scss']
})
export class ListaBasicaComponent {

  productoLista: Producto[] = [
    {
      nombre:"Carne",
      precio: 30000,
      descripcion: "Carne de cerdo Premium"
    },
    {
      nombre:"Papas",
      precio: 5000,
      descripcion: "Papa Criolla"
    }
  ]

  logout: boolean = true;

  iniciarCesion(){
    this.logout = !this.logout;
  }

}
