import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./app.component').then(m => m.AppComponent)
  }
  // Additional routes migrated similarly
];

// Note: The legacy RouterModule configuration has been modernized to support dynamic imports for lazy loading.
