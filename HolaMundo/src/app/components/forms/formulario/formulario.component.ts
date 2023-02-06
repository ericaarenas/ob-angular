import { Component, OnInit } from '@angular/core';

//ejemplo basico de formulario reactivo
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

//definimos nuestro formulario
miFormulario: FormGroup | undefined; //creamos la variable donde iran todos los campos y el FormBuilder nos ayudará a crearlo

//inyectamos la clase FormBuilder para construir el FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //Iniciamos los campos del formuario y sus valores por defecto
    this.miFormulario = this.formBuilder.group({
      nombre: '',
      apellidos: '',
      email: '',
      telefono: '',
      direccion: '',

    });
    //Nos suscribimos a los cambios que ocurran en el Formulario y los mostramos por consola
    this.miFormulario.valueChanges.subscribe(console.log)


  }


}
