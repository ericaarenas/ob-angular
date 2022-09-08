import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaMundo';
  usuario = '@earenas';

  /*Esta funcion se ejecuta cuando en el hijo se pulse el boton*/ 
  recibirMensajeDelHijo(evento:string) {
    alert(evento);
  }
}
