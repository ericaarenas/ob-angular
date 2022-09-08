import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {
  @Input() nombre: string = "Anónimo";
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
    fontWeigth: 'bold'
  }

  constructor() { }

  ngOnInit(): void {
    //Instrucciones previas a la renderización del componente:cargar datos, cualquier tarea previa
    console.log("ngOnInit del componente Saludo")
  }

  ngOnChanges(changes: SimpleChanges): void {
    //se ejecuta cuando hay cambios en el componente.
    console.log("CAMBIO: valor anterior", changes['nombre'].previousValue)
    console.log("CAMBIO: valor nuevo", changes['nombre'].currentValue)
  }

  ngOnDestroy(): void {
    //Cuando el componente desaparece: navegar a otra página, destruir componente...
    console.log("ngOnDestroy el componente va a desaparecer")
  }


  /* Ejemplo para gestionar un evento de tipo click en el DOM */
  enviarMensajeAlPadre(): void {
    // alert(`Hola, ${this.nombre}. Alerta despachada desde un clic de botón`);
    this.mensajeEmitter.emit(`Hola, ${this.nombre}. Alerta despachada desde un clic de botón`);
  }

}



// Orden de ciclo de vida de los componentes;
//*1. ngOnChanges
//*2. ngOnInit
// 3. ngAfterContentInit
// 4. ngAfterContentChecked
// 5. ngAfterViewInit
// 6. ngAfterViewChecked
// 7. ngAfterContentChecked
// 8. ngAfterViewInit
//*9. ngOnDestroy