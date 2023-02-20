import { Component, OnInit } from '@angular/core';
import { IJugador } from '../../models/jugador.interface';
import { IContacto } from '../../models/contacto.interface';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1991,8,25);
  cambio: boolean = true;
  nombre: string = 'Erica';
  numero_PI: number = 3.1415926535;
  precioCarrito: number = 100;

  persona: IContacto = {
    id: 0,
    nombre: 'Juan',
    apellidos: 'San José',
    edad: 30,
    email: 'mail@cualquiera.es'
  }
  cantidad: number = 0.3512;
  textoLargo: string = 'un texto muy largoasdf asdlkjasld un texto muy largoasdf asdlkjasld';

  //ejemplo para pipe Calcular puntuacion
  jugador1: IJugador = {
    nombre: 'Laura',
    puntos: [10, 40, 56, 0]
  }

  jugador2: IJugador = {
    nombre: 'Pepe',
    puntos: [20, 24, 35, 1]
  }
  constructor() { }

  ngOnInit(): void {
  }

  get dateFormat() {
    return this.cambio ? 'shortDate': 'fullDate';
  }
  cambioFormato() {
    this.cambio = !this.cambio;
  }
}
