import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app.component').then(m => m.AppComponent)
  }
  // Additional routes can be added here, using dynamic import for lazy loading
];

export const AppRoutingModule = RouterModule.forRoot(routes);
