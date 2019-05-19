import { Routes } from '@angular/router';

import { HomeComponent} from './home.component'
import { ContactComponent} from './contact.component'
import { ProductComponent } from './product.component'

import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login.component';
import { ProductViewComponent } from './product-view.component';
import { ProductAddComponent } from './product-add.component';
import { ProductEditComponent } from './product-edit.component';


export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component:LoginComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ProductComponent, canActivate : [AuthGuardService] ,
      canActivateChild : [AuthGuardService],
      children: [
      {  path: 'view/:id', component: ProductViewComponent  },
      {  path: 'edit/:id', component: ProductEditComponent  },
      {  path: 'add', component: ProductAddComponent }
      ]  
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
