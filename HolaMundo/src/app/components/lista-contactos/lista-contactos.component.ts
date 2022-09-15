import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from '../../models/contacto.interface';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;
  //se inyecta el servicio a nivel raiz, para este componente
  constructor(private contactoService: ContactoService) { }

  ngOnInit(): void {
    //obtenemos la lista de contactos que nos brinda el servicio
    this.contactoService.obtenerContactos()
    .then((lista: IContacto[]) => this.listaContactos = lista)
    .catch((error) => console.error(`Ha habido un error al recuperar la lista de contactos: ${error}`))
    .finally(() => console.log('Petición de la lista de contactos terminada'));
    // console.table(this.listaContactos);
  }

  obtenerContacto (id: number) {
    // console.log(`Obtener información del contacto con ID: ${id}`)
    this.contactoService.obtenerContactoPorID(id)
    ?.then((contacto: IContacto) => this.contactoSeleccionado = contacto)
    .catch((error) => console.error(`Ha habido un error al recuperar los detalles del contacto: ${error}`))
    .finally(() => console.log('Petición de contacto por id terminada'));
  }

}
