import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit{

  // Definimos nuestro formulario
  miFormulario:FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder){}

  ngOnInit():void{

    this.miFormulario = this.formBuilder.group(
      {
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: ''
      }
    );

    //nos subscribimos a los cambios del formulario
    this.miFormulario.valueChanges.subscribe(
      console.log
    );

  }

}
