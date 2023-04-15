import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent {
  @Input() nombre:string= "default";

  constructor(){

  }

  mostrarAlerta(){
    alert(`hola ${this.nombre}, sobame esta`);
  }
}
