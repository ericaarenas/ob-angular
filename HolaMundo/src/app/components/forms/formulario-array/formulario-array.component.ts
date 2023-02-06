import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario-array',
  templateUrl: './formulario-array.component.html',
  styleUrls: ['./formulario-array.component.scss']
})
export class FormularioArrayComponent implements OnInit {

  miFormularioArray: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.miFormularioArray = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      telefonos: this.formBuilder.array([]) //inicializamos la lista de telefonos vacía
    })
  }

  //metodo getter para obtener el FormArray de la lista de teléfonos
    get telefonosFormulario(): FormArray {
      return this.miFormularioArray.get('telefonos') as FormArray
      }

    //metodos para añadir telefonos a la listas

  addTelefono() {
    const telefonoNuevo = this.formBuilder.group({
      prefijo: '',
      numero: '',
    });
    //añadimos el grupo a la lista de telefonos
    this.telefonosFormulario.push(telefonoNuevo);
  }
  
  //metodo para eliminar telefonos de la lista
  removeTelefono(index: number) {
    this.telefonosFormulario.removeAt(index);
  }

}
