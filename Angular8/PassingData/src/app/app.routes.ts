import { Routes } from '@angular/router';

import { StaticComponent} from './static.component'
import { DynamicComponent } from './dynamic.component';
import { HomeComponent } from './home.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'static', component: StaticComponent, data :{ id:'1', name:"Angular"}},
  { path: 'dynamic', component: DynamicComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
