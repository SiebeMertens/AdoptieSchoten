import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pets',
  },
  {
    path: 'pets',
    loadComponent: () => import('./features/pet-list/pet-list.component').then((m) => m.PetListComponent),
  },
  {
    path: 'pets/:id',
    loadComponent: () => import('./features/pet-details/pet-details.component').then((m) => m.PetDetailsComponent),
  },
  {
    path: '**',
    redirectTo: 'pets',
  },
];
