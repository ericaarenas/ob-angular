import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //me dice el contenido de la url

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class ContactDetailPageComponent implements OnInit {

  id: any | undefined;

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
  }

}
