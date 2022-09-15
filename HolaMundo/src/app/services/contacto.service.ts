import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

//importamos observable de rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]> {
    // return CONTACTOS;
    return Promise.resolve(CONTACTOS);
  }
  obtenerContactoPorID (id: number): Observable<IContacto> | undefined {
    //creamos un observable
    let observable: Observable<IContacto> = new Observable(observer => {
      observer.next(contacto); //emitir un valor a todo componente suscrito
      observer.complete(); //no emitimos más valores
    })

    const contacto = CONTACTOS.find((contacto:IContacto) => contacto.id === id);
    if(contacto) {
      return observable;
    } else {
      return;
    }
  }
}
