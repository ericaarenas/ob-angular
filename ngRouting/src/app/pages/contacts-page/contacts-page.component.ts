import { Component, OnInit } from '@angular/core';
import { IContacto } from '../../models/contact.interface';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

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
      email: 'elquesea@gmail.com',
      sexo: 'hombre'
    },
    {
      id: 2,
      nombre: 'Paula',
      email: 'elquesea2@gmail.com',
      sexo: 'mujer'
    },
    {
      id: 3,
      nombre: 'Jose',
      email: 'elquesea3@gmail.com',
      sexo: 'hombre'
    }
  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    //capturamos la info que viene de home (filtro)
    //obtener los queryparams
    // this.route.queryParams.filter(params => {
    //   params.sexo
    // })
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParams: ', params.sexo);
    })

  }
//ejemplo de paso de info entre componentes a través del ESTADO
volverAHome(contacto: IContacto) {

  let navigationExtras: NavigationExtras = {
    state: {
      data: contacto
    }
  }

  this.router.navigate(['/home'], navigationExtras)
}


}
