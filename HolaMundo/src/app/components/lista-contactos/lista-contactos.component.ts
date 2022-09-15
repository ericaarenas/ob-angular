import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactoService } from '../../services/contacto.service';
import { IContacto } from '../../models/contacto.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit, OnDestroy {

  listaContactos: IContacto[] = [];
  contactoSeleccionado: IContacto | undefined;

  //susbscripción del servicio
  subscripcion: Subscription | undefined;
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
    // this.contactoService.obtenerContactoPorID(id)
    // ?.then((contacto: IContacto) => this.contactoSeleccionado = contacto)
    // .catch((error) => console.error(`Ha habido un error al recuperar los detalles del contacto: ${error}`))
    // .finally(() => console.log('Petición de contacto por id terminada'));
    this.subscripcion = this.contactoService.obtenerContactoPorID(id)?.subscribe(
      (contacto:IContacto) => this.contactoSeleccionado = contacto)
  }

  ngOnDestroy(): void {
    this.subscripcion?.unsubscribe();
  }
}
