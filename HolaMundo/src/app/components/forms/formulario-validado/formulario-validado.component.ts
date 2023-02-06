import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-validado',
  templateUrl: './formulario-validado.component.html',
  styleUrls: ['./formulario-validado.component.scss']
})
export class FormularioValidadoComponent implements OnInit {

  miFormularioValidado: FormGroup = new FormGroup({})

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.miFormularioValidado = this.formBuilder.group({
      nombre: ['', Validators.required], //campo obligatrio
      apellidos: '', 
      edad: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z]*')])],
      //campo booleano con true como obligatorio
      acepta: [false, Validators.requiredTrue]
    })


  }
  getNombre() {
    return this.miFormularioValidado.get('nombre');
  }
  getApellidos() {
    return this.miFormularioValidado.get('apellidos');
  }

  getEdad() {
    return this.miFormularioValidado.get('edad');
  }
  getEmail() {
    return this.miFormularioValidado.get('email');
  }
  getPassword() {
    return this.miFormularioValidado.get('password');
  }
  getAcepta() {
    return this.miFormularioValidado.get('acepta');
  }

  //metodo de submit del formulario
}
