import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/login/login.component').then(
        (m) => m.LoginComponent
      );
    },
  },
  {
    path: 'home',
    loadComponent: () => {
      return import('./pages/home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'join',
    loadComponent: () => {
      return import('./pages/signup/signup.component').then(
        (m) => m.SignupComponent
      );
    },
  },

  {
    path: 'todo',
    loadComponent: () => {
      return import('./pages/todos/todos.component').then(
        (m) => m.TodosComponent
      );
    },
  },
];
