import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { Forestillinger } from './forestillinger/forestillinger';
import { ForestillingDetaljer } from './forestilling-detaljer/forestilling-detaljer';

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
    path: 'forestilling-detaljer',
    component: ForestillingDetaljer,
  },
  {
    path: '**',
    redirectTo: 'forestillinger',
  },
];
