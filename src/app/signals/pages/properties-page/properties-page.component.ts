import { Component, computed, effect, OnDestroy, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';
import { filter } from 'rxjs';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy {
  ngOnDestroy(): void {
    //this.userChangedEffect.destroy()
  };
  public user = signal<User>({
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://reqres.in/img/faces/2-image.jpg"
  });

  public counter = signal(10)

  //propiedad computada
  public fullName = computed( () => `${this.user().first_name} ${this.user().last_name}` );

  //effet en angular dentro de serivicios o componentes
  public userChangedEffect = effect(() => { //callback
    console.log(this.user().first_name, this.counter());
  });
  public increaseBy( value: number ): void {
    this.counter.update( current => current + value );
  };

  public onFieldUpdated( field: keyof User , value: string ) { //keyof User llave de usuario


    //potencialmente seguro, ya que agrega una nueva propiedad al objero
    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // });

    //se puede hacer con el update
    // this.user.update(current => ({
    //   ...current,
    //   [field]: value
    // }));

    //el que sirve
    this.user.update( current => {
      switch( field ) {
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = Number( value ); /// el valor numero del value
          break;
      }
      return current
    })
  };
  
};
