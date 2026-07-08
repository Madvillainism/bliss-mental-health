# 002-login-build — Spec

## Overview
Fake authentication flow with splash intro, login/register forms, LocalStorage persistence, and Signal-based route guard.

## Splash Intro Screen
- Fullscreen with BLISS wordmark + tagline: "Your gentle path to calm"
- Pastel gradient background: `from-bliss-soft-lavender via-bliss-soft-sky to-bliss-cream`
- Auto-transition to `/login` after 2.5s via `setTimeout`
- Fade-out animation before navigation

## Login / Register Forms
- Single form component toggling between login and register modes
- All fields use `model()` Signal binding

**Login mode:**
- Email input, password input
- "Sign In" button (enabled only when both fields non-empty)
- "Create account" link → toggles to register

**Register mode:**
- Name input, email input, password input
- "Sign Up" button
- "Already have an account?" link → toggles to login

## LocalStorage Auth Simulation
- `MockAuthService` (injectable, providedIn: 'root')
- On login/register: generates fake token (`crypto.randomUUID()`)
- Persists: `localStorage.setItem('bliss_auth_token', token)`
- Register also saves: `localStorage.setItem('bliss_user_name', name)`
- `isAuthenticated()` Signal reads LocalStorage on init
- `toObservable()` wrapper for route guard compatibility

## Route Guard
- Standalone `canActivate` function
- Reads `isAuthenticated()` via `toObservable()` → `filter(v => v !== null)` → first non-null value
- If `true`: allow navigation
- If `false`: redirect to `/login`

## Routes Covered
| Path | Guard | Component |
|---|---|---|
| `/splash` | None | SplashComponent |
| `/login` | None | LoginComponent |
| `/dashboard` | canActivate | DashboardComponent |
| `/mood` | canActivate | MoodComponent |
| `/community` | canActivate | CommunityComponent |
| `/profile` | canActivate | ProfileComponent |
