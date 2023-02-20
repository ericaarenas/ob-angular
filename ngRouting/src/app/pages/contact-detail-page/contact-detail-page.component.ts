import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //me dice el contenido de la url
import { IContacto } from '../../models/contact.interface';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})

export class ContactDetailPageComponent implements OnInit {

  id: any | undefined;
  contacto: IContacto = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    sexo: ''
  };
  filtroPrevio: string = 'todos';
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    //vamos a leer los parámetros
    this.route.params.subscribe(
      (params: any) => {
        if(params.id) {
          this.id = params.id;
        }
      }
    );
    //se puede hacer también con la opción de snapshot.
    //vamos a leer también del state el contacto
    if(history.state.data) {
      this.contacto = history.state.data;
    }

    if(history.state.filtro) {
      this.filtroPrevio = history.state.filtro;
    }
  }

}
