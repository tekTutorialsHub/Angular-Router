import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Routing Module - Route Guards Demo';

  constructor (private authService:AuthService, 
               private router:Router) {
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate(['home']);
  }

}
