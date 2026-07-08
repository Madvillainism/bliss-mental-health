# Tasks — 002-login-build

| # | Task | Owner | Status |
|---|---|---|---|
| 1 | Create `shared/services/mock-auth.service.ts`: `isAuthenticated` Signal initialized from `localStorage.getItem('bliss_auth_token')`, `login()` and `register()` methods that persist token, `logout()` that clears | TypeScript-Expert-Agent | Pending |
| 2 | Create `core/guards/auth.guard.ts`: standalone `canActivate` function using `toObservable()` on `isAuthenticated()`, redirects to `/login` if false | TypeScript-Expert-Agent | Pending |
| 3 | Create `features/splash/splash.component.ts`: fullscreen gradient bg, BLISS wordmark + tagline, 2.5s timer → navigate to `/login`, cleanup on destroy | Frontend-Design-Agent | Pending |
| 4 | Create `features/login/login.component.ts`: toggle between login/register modes, `model()` Signal fields, conditional "Sign In"/"Sign Up" button, success → navigate to `/dashboard` | Frontend-Design-Agent | Pending |
| 5 | Update `app.routes.ts`: add splash route (no guard), login route (no guard), apply `authGuard` to `/dashboard`, `/mood`, `/community`, `/profile` | TypeScript-Expert-Agent | Pending |
| 6 | Verify guard blocks unauthenticated access: navigate to `/dashboard` while not logged in → should redirect to `/login` | Bliss-Orchestrator | Pending |
| 7 | Verify persistence: login → refresh page → should stay on dashboard without re-login | Bliss-Orchestrator | Pending |
