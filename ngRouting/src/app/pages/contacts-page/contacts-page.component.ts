import { Component, OnInit } from '@angular/core';
import { IContacto } from '../../models/contact.interface';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {

  filtroSexo: string = 'todos';
  listaContactos: IContacto[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private contactService: ContactService) { }

  ngOnInit(): void {

    //capturamos la info que viene de home (filtro)
    //obtener los queryparams
    // this.route.queryParams.filter(params => {
    //   params.sexo
    // })
    this.route.queryParams.subscribe((params: any) => {
      console.log('QueryParams: ', params.sexo);
      if(params.sexo) {
        this.filtroSexo = params.sexo   
      }
      //obtener la lista de contactos
      this.contactService.obtenerContactos(this.filtroSexo)!
      .then(
        (lista) => this.listaContactos = lista
      )
      .catch((error) => console.error(`Ha habido un error al obtener los contactos: ${error}`))
      .finally(() => console.info('Petición de contactos terminada'))
    });
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
