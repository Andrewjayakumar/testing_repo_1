import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/app.component').then(m => m.AppComponent)
  },
  {
    path: 'lazy',
    loadComponent: () => import('./components/lazy/lazy.component').then(m => m.LazyComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

// Note: AppRoutingModule might be refactored if not needed in standalone components context
