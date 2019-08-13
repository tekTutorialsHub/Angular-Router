import { Routes } from '@angular/router';

import { HomeComponent} from './home.component'
import { ContactComponent} from './contact.component'


import { RegisterComponent } from './register.component';
import { DeactivateGuard } from './decativate.guard';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent, canDeactivate:[DeactivateGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
