import { Component, OnInit } from '@angular/core';


export type Producto = {
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.scss']
})
export class BasicListComponent implements OnInit {

  listaElementos: Producto[] = [
    {
      nombre: 'Leche',
      precio: 10,
      descripcion: 'Leche entera'
    },
    {
      nombre: 'Carne',
      precio: 20,
      descripcion: 'Ternera'
    }
  ];
  cargando: boolean = true;
  opcion: number = 0;

  constructor() { }

  ngOnInit(): void {

  }

  cambiarCargando(): void {
    this.cargando = !this.cargando;
  }

  escogerOpcion(opcionEscogida: number) {
    this.opcion = opcionEscogida; //el valor cambia, implica un cambio en los elementos renderizados
  }
}
