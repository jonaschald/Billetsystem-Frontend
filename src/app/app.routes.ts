
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login';
import { Forestillinger } from './components/forestillinger/forestillinger';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'forestillinger',
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
    redirectTo: 'forestillinger',
  },
];
