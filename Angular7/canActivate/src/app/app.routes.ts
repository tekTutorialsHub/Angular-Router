import { Routes } from '@angular/router';

import { HomeComponent} from './home.component'
import { ContactComponent} from './contact.component'
import { ProductComponent} from './product.component'

import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login.component';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent, canActivate : [AuthGuardService] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
