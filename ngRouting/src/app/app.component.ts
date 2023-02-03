import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ngRouting';

  token: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token')
  }

  logout() {
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}

//paso de info entre componentes:
//1. a través de @inputs y @outputs
//2. a través de inyección de constructores de componentes hijos @viewChild, @contentChild, @contentchildren
//3. a través de servicios, promesas, observables ---> NGRX (gestión del estado de la app)
//4. a través de parámetros entre rutas
