import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from "../interfaces/dbz.interface";
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})

export class AgregarComponent  {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 10
  };

  constructor( private dbzService: DbzService ) {}

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if(this.nuevo.nombre.trim().length === 0) { //si el texto sin espacios en blanco tiene longitud 0
      return;
    }

    console.log(this.nuevo);
    // this.onNuevoPersonaje.emit(this.nuevo); // Emitimos el dato que capturamos por el input al componente padre: Main-page
    this.dbzService.agregarPersonaje(this.nuevo);
    
    //limpiar el formulario - creamos un objeto nuevo
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
