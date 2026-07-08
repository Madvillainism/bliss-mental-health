import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { MockAuthService } from '../../shared/services/mock-auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(MockAuthService);
  const router = inject(Router);
  return auth.isAuthenticated() || router.createUrlTree(['/splash']);
};
