import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customeLabel]'
})
export class CustomeLabelDirective implements OnInit{

  //forma de obtener la tag de un elemento
  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'tomaro';
  private _errors?: ValidationErrors | null;

  //set utilizado para establecer un valor a la directiva
  @Input() set color (value: string) {
    this._color = value;
    this.setStyle();
  }

  //set utilizado para establecer un valor a la directiva
  //se puede recibir estos tipos de datos ValidationErrors | null | undefined
  @Input() set errors( value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMessages();
  };

  constructor(
    //forma de inyectar el elemento html al que se le aplica la directiva
    private el: ElementRef<HTMLElement>
  ) {
    this.htmlElement = el;
  };

  ngOnInit(): void {
    this.setStyle();
  };

  public setStyle():void {
    if( !this.htmlElement ) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  public setErrorMessages(): void {
    if( !this.htmlElement ) return;
    if( !this._errors) return;
    //Validar los error
    const erros_messages = Object.keys(this._errors)

    if( erros_messages.includes('required') ) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    };

    if( erros_messages.includes('minlength') ) {
      const minimo = this._errors!['minlength']['requiredLength'];
      const maximo = this._errors!['minlength']['actualLength'];
      this.htmlElement.nativeElement.innerText = `Este campo debe tener al menos ${minimo} caracteres. Y solo tiene ${maximo} caracteres.`;
      return;
    };

    if( erros_messages.includes('email') ) {
      this.htmlElement.nativeElement.innerText = 'Este campo debe ser un correo electronico valido.';
      return;
    }
  }
}
