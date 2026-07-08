# Implementation Plan — 002-login-build

## Phases

### Phase 1: MockAuthService
- Create `shared/services/mock-auth.service.ts`
- Signal: `isAuthenticated` (initialized from LocalStorage)
- Methods: `login(email, password)`, `register(name, email, password)`, `logout()`
- Token generation via `crypto.randomUUID()`
- `toObservable()` adapter for guard

### Phase 2: Splash Screen
- Create `features/splash/splash.component.ts`
- Fullscreen gradient background, centered wordmark
- `setTimeout` → navigate to `/login` after 2.5s
- NgOnDestroy cleanup for timer

### Phase 3: Login Component
- Create `features/login/login.component.ts`
- Toggle between login/register modes with `model()` signals
- Conditional button labels and field visibility
- On success: navigate to `/dashboard`
- On error: inline error message display

### Phase 4: Route Guard
- Create `core/guards/auth.guard.ts`
- Standalone `canActivate` function
- Returns `Observable<boolean | UrlTree>`
- Redirects to `/login` if not authenticated

## Files Affected
| File | Purpose |
|---|---|
| `shared/services/mock-auth.service.ts` | Auth logic + persistence |
| `core/guards/auth.guard.ts` | Route guard |
| `features/splash/splash.component.ts` | Splash screen |
| `features/login/login.component.ts` | Login/Register form |
| `app/app.routes.ts` | Add guard to routes |
