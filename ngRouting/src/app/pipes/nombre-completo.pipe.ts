import { Pipe, PipeTransform } from '@angular/core';
import { IContacto } from '../models/contact.interface';


@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(contacto: IContacto, ...args: unknown[]): unknown {
    return `${contacto.nombre} ${contacto.apellido}`;
  }

}
