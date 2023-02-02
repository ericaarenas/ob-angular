import { Component, OnInit } from '@angular/core';
import { IContacto } from '../../models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  listaContactos: IContacto[] = [
    {
      id: 1,
      nombre: 'Martin',
      email: 'elquesea@gmail.com'
    },
    {
      id: 2,
      nombre: 'Paula',
      email: 'elquesea2@gmail.com'
    },
    {
      id: 3,
      nombre: 'Jose',
      email: 'elquesea3@gmail.com'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
