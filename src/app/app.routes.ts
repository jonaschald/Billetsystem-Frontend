import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { Forestillinger } from './forestillinger/forestillinger';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forestillinger',
    component: Forestillinger,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
