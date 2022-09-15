import { Injectable } from '@angular/core';
import { CONTACTOS } from '../mocks/contactos.mock';
import { IContacto } from '../models/contacto.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor() { }

  obtenerContactos(): Promise<IContacto[]> {
    // return CONTACTOS;
    return Promise.resolve(CONTACTOS);
  }
  obtenerContactoPorID (id: number): Promise<IContacto> | undefined {
    const contacto = CONTACTOS.find((contacto:IContacto) => contacto.id === id);
    if(contacto)
      {return Promise.resolve(contacto);}
      else
      {return;}
  }
}
