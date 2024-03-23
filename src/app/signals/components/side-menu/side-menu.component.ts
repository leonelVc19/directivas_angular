import { Component, signal } from '@angular/core';
interface MenuItem {
  title: string;
  route: string;
}
@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  //una sena; es un espacio en memoria que siempre se esta utilizando
  //forma simplificada de programacion reactiva

  //Manera tradicional
  // public menuItems: MenuItem[] = [
  //   { title: 'Counter', route: 'counter' },
  //   { title: 'User Information', route: 'user-info' },
  //   { title: 'Properties', route: 'properties' },
  // ];

  public menuItems = signal<MenuItem[]>([
    { title: 'Counter', route: 'counter' },
    { title: 'User Information', route: 'user-info' },
    { title: 'Properties', route: 'properties' },
  ]);
}
