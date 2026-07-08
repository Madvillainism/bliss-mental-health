## 1. Design System & Project Setup

- [x] 1.1 Define `@theme` block in `src/styles.css` with all BLISS color tokens, font families, radii, and animation keyframes
- [x] 1.2 Install `@fortawesome/fontawesome-free` and import CSS via `styles.css`
- [x] 1.3 Verify build compiles with `ng build` — no errors after token setup

## 2. Responsive Layout Shell

- [x] 2.1 Create `shared/services/mock-navigation.service.ts` with `activeTabIndex` Signal and `navigate(tabIndex)` method
- [x] 2.2 Create `shell/shell.component.ts` — centered viewport mockup wrapper with glassmorphism border and responsive breakpoint
- [x] 2.3 Create `shell/nav-bar/nav-bar.component.ts` — 4-tab bottom nav with FontAwesome icons, Signal-bound active state, router navigation
- [x] 2.4 Create `shell/header/header.component.ts` — BLISS wordmark + notification bell icon with backdrop blur
- [x] 2.5 Update `app.routes.ts` with route definitions for `/dashboard`, `/mood`, `/community`, `/profile` (placeholder components)

## 3. Auth Flow

- [ ] 3.1 Create `shared/services/mock-auth.service.ts` — `isAuthenticated` Signal from LocalStorage, `login/register/logout` methods, token generation
- [ ] 3.2 Create `core/guards/auth.guard.ts` — standalone `canActivate` with `toObservable()` adapter, redirect to `/login` if unauthenticated
- [ ] 3.3 Create `features/splash/splash.component.ts` — fullscreen gradient, BLISS wordmark + tagline, 2.5s auto-transition
- [ ] 3.4 Create `features/login/login.component.ts` — toggle between login/register, `model()` binding, validation, submit → LocalStorage
- [ ] 3.5 Apply `authGuard` to protected routes in `app.routes.ts`

## 4. Dashboard & Mood Selector

- [ ] 4.1 Create `shared/services/mock-notification.service.ts` — `Notification` interface, `notifications` Signal, `emit/dismiss/emitSupportEmail`
- [ ] 4.2 Create `features/dashboard/dashboard.component.ts` — 5 mood cards grid with staggered entry animation, mood gradient backgrounds
- [ ] 4.3 Implement mood selection logic: `scale-105` + accent border for selected, 50% opacity for unselected, LocalStorage persistence with date-key
- [ ] 4.4 Wire Critical mood → `MockNotificationService.emitSupportEmail()` trigger

## 5. Profile Form & Notifications

- [ ] 5.1 Create `features/profile/profile.component.ts` — `model()` Signals for name, ageRange, goals; LocalStorage load/save; success toast
- [ ] 5.2 Create `shared/components/notification-banner/notification-banner.component.ts` — fixed positioning, `@for` loop, `banner-in`/`banner-out` animations, 5s auto-dismiss, close button

## 6. Integration & Validation

- [ ] 6.1 Verify guard blocks unauthenticated access to `/dashboard`
- [ ] 6.2 Verify auth token persists across page refresh
- [ ] 6.3 Verify mood selection persists and re-highlights on same-day return
- [ ] 6.4 Verify Critical mood triggers banner within 300ms, auto-dismisses after 5s
- [ ] 6.5 Verify multiple notification banners stack vertically
- [ ] 6.6 Run `ng build` and confirm production build succeeds
