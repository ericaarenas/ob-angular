import { Component, OnInit } from '@angular/core';
//importar de reactive Forms para crear un formulario anidado
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-anidado',
  templateUrl: './formulario-anidado.component.html',
  styleUrls: ['./formulario-anidado.component.scss']
})
export class FormularioAnidadoComponent implements OnInit {

  miFormularioAnidado: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //agrpuación para teléfonos
    const telefonoFijo = this.formBuilder.group(
      {
        prefijo: '',
        numero: '',
      }
    )
    const telefonoMovil = this.formBuilder.group(
      {
        prefijo: '',
        numero: '',
      }
    )
      //Agrupación de formulario
      this.miFormularioAnidado = this.formBuilder.group(
        {
          telefonoFijo: telefonoFijo,
          telefonoMovil: telefonoMovil,
        }
      )
  }

}
