import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  //metodo de inyeccion o tambien se puede utilizar el constructor
  private http = inject( HttpClient ); //dependencias inyectadas
  private baseUrl: string = 'https://reqres.in/api/users';
  public getUserById( id: number ): Observable<User> {

    return this.http.get<SingleUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        map( response => response.data),
        tap( console.log ),
      )
  };

};
