import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
  nombre:string = "Erica";

  constructor() { }

  ngOnInit(): void {
    //Instrucciones previas a la renderización del componente 
    console.log("ngOnInit del componente Saludo")
  }

}
