import { IContacto } from "../models/contacto.interface";
//exportams una lista simulada de contactos
export const CONTACTOS: IContacto[] = [
    {
        id: 0,
        nombre: 'Erica',
        apellidos: 'Arenas',
        email: 'earenas@mail.com',
        edad: 40
    },
    {
        id: 1,
        nombre: 'Laura',
        apellidos: 'Chico',
        email: 'lchico@mail.com',
        edad: 32
    },
    {
        id: 2,
        nombre: 'Patricia',
        apellidos: 'Garcia',
        email: 'pgarcia@mail.com',
        edad: 25
    },
    {
        id: 3,
        nombre: 'Natalia',
        apellidos: 'Perez',
        email: 'nperez@mail.com',
        edad: 18
    },
]