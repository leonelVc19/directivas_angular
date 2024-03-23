import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {
  // esta es una senal
  public counter = signal(10);

  public increaseBy( value:number ) {
    // this.counter.set( this.counter() + value );
    //otra forma
    this.counter.update( current => current + value);

  };

  public decrementBy( value:number ) {
    // this.counter.set( this.counter() + value );
    //otra forma
    this.counter.update( current => current - value);

  }
}
