import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit{

  miFormularioArray: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder){}

  ngOnInit():void{

    this.miFormularioArray = this.formBuilder.group(
      {
        nombre: '',
        apellidos: '',
        telefonos: this.formBuilder.array([]) //inicializamos la lista de telefonos vacia
      }
    );

  }

  //metodo Getter para obtener el FormArray de la lista de telefonos
  get telefonosFormulario(): FormArray{
    return this.miFormularioArray.get('telefonos') as FormArray;
  }

  //metodo para añadir untelefono a la lista
  agregarTelefono(){
    const telefonoNuevo = this.formBuilder.group({
      prefijo: '',
      numero: ''
    });

    this.telefonosFormulario.push(telefonoNuevo);
  }

  //metodo para borrar un telefono de la lista
  eliminarTelefono(index:number){
    this.telefonosFormulario.removeAt(index);
  }


}
