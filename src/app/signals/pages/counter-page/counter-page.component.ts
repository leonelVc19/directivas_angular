import { Component, computed, signal } from '@angular/core';
//las senales no pueden estar dentro del componente

const name = signal('Juan');
//cambiar el nombre de la sena;
name.set('Leonel')//  en todos los lugares donde se este utilizando tambien se va a cambiar

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  constructor() {
    console.log(name());
  }
  // esta es una senal
  public counter = signal(10);
  //signal computada de solo lectura
  public squeareCounter = computed( () => this.counter() * this.counter() ); //solo lectura
  // si cambia, el dato

  public increaseBy( value:number ) {
    // this.counter.set( this.counter() + value );
    //otra forma
    this.counter.update( current => current + value);
  };

};
