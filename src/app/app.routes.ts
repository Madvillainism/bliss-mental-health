import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  {
    path: 'splash',
    loadComponent: () => import('./features/splash/splash.component').then(m => m.SplashComponent),
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./features/onboarding/onboarding.component').then(m => m.OnboardingComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: '',
    component: ShellComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: 'mood',
        loadComponent: () => import('./features/mood/mood.component').then(m => m.MoodComponent),
      },
      {
        path: 'community',
        loadComponent: () => import('./features/community/community.component').then(m => m.CommunityComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent),
      },
    ],
  },
  { path: '**', redirectTo: '/splash' },
];
