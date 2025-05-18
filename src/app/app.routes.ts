import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomePageComponent } from './pages/Home/home-page/home-page.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/Auth/login-page/login-page.component';
import { RestorePasswordPageComponent } from './pages/Auth/restore-password-page/restore-password-page.component';
import { AuthGuard } from './shared/guards/auth_guard.guard';
import { EventsListComponent } from './pages/Events/events-list/events-list.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent, // Layout para el menú principal (para usuarios autenticados)
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'events', component: EventsListComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Si la ruta es '/', redirige a 'home' dentro del layout principal
    ],
    canActivate: [AuthGuard], // Aplica el guard a este conjunto de rutas
  },
  {
    path: 'Auth',
    component: AuthLayoutComponent, // Layout para autenticación (para usuarios no autenticados)
    children: [
      { path: 'Login', component: LoginPageComponent },
      { path: 'restore-password', component: RestorePasswordPageComponent },
      { path: '', redirectTo: 'Login', pathMatch: 'full' }, // Si la ruta es '/Auth', redirige a 'Login' dentro del layout de autenticación
    ],
  },
  { path: '**', redirectTo: 'blank/error' },
];
