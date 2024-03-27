import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UserServicesService } from '../../services/userServices.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit{
  ngOnInit(): void {
    this.loadUser( this.userId() ); //cuando es una senal, simpre se tiene que colocar () para obtemer el valor
  };

  private userServices = inject( UserServicesService );
  public userId = signal(1)

  public currentUser = signal<User|undefined>(undefined);
  public userWasFound = signal(true);

  public fullName = computed<string>( () => { //senal computada
    if( !this.currentUser() ) return 'Usuario no encontrado';
    return `${this.currentUser()!.first_name} ${this.currentUser()!.last_name}`
  })

  public loadUser( id: number ): void {
    if( id <= 0 ) return;

    this.userId.set(id); //establecer valor
    this.currentUser.set(undefined)
    this.userServices.getUserById(id)
      .subscribe({
        next: (user) => {
          this.currentUser.set(user);
          this.userWasFound.set(true);
        },
        error: () => {
          this.userWasFound.set(false)
          this.currentUser.set(undefined)
        }
      })
  };

};

