import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong> {{base}}</strong></h3>
        <button (click)="acumular(base)"> + {{base}}</button> <!--Los paréntesis indican que es un evento-->
        <span>{{numero}}</span>
        <button (click)="acumular(-base)">- {{base}}</button>
    `
})
export class ContadorComponent {
    public titulo: string = 'App contador';

    numero: number = 0;
    base: number = 5;
  
    acumular( valor: number ):void {
      this.numero += valor;
    }
}