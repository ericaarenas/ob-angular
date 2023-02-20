import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  templateUrl: './ejemplo-pipes.component.html',
  styleUrls: ['./ejemplo-pipes.component.scss']
})
export class EjemploPipesComponent implements OnInit {

  dob: Date = new Date(1991,8,25);
  cambio: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  get dateFormat() {
    return this.cambio ? 'shortDate': 'fullDate';
  }
  cambioFormato() {
    this.cambio = !this.cambio;
  }
}
