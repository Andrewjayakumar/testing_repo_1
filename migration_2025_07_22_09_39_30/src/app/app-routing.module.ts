import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(m => m.AppComponent)
  },
  {
    path: 'my',
    loadComponent: () => import('./components/my/my.component').then(m => m.MyComponent)
  }
];
