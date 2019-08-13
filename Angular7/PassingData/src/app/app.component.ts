import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="container">

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" [routerLink]="['/']"><strong> {{title}} </strong></a>
      </div>
    </div>
  </nav>
  
  <router-outlet></router-outlet>
  
  </div>`
})
export class AppComponent {
  title = 'Routing Module - Passing Dynamic / Static data route';
}


