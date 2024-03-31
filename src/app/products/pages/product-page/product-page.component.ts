import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  // 1- forma de inyectar dependencias  // constructor( privkate fb: FormBuilder ) { }
  // 2- forma de inyectar dependencias
  private formB = inject( FormBuilder );
  public color: string = 'tomato';

  public myForm: FormGroup = this.formB.group({
    name: ['', [ Validators.required, Validators.minLength(6), Validators.email ]]
  })

  //propiedades
  public changeColor(): void {
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
};