## Why

Build a high-fidelity interactive mockup of the BLISS Mental Health app, translating the Behance UX/UI design (by Virginia Zambrano) into a fully navigable Angular 19 prototype with LocalStorage-backed state, without any server dependency.

## What Changes

- Scaffold Angular 19 standalone project with Tailwind CSS v4 and BLISS design tokens (pastel gradients, glassmorphism, rounded-3xl)
- Build responsive mobile viewport shell centered on desktop with bottom navigation bar (Home, Mood, Community, Profile)
- Implement fake login/register flow with LocalStorage persistence and Signal-based route guard
- Create interactive mood selector dashboard with persona profile form and floating notification banner system

## Capabilities

### New Capabilities
- `responsive-layout`: Viewport mockup wrapper, Tailwind gradient token system, bottom navigation bar, app header
- `login-build`: Splash/intro screen, login/register forms, LocalStorage auth simulation, standalone route guard
- `user-persona-form`: Daily mood selector with micro-interactions, persona profile form, floating fake email notification banner with auto-dismiss

### Modified Capabilities
- (none — initial project)

## Impact

- Angular 19 standalone components, Signals for state, model() for bidirectional binding
- Tailwind CSS v4 with @theme tokens for all BLISS pastel colors and animations
- Zero-server: all state via MockDataService → LocalStorage
- No HttpClient, no real backend dependencies
