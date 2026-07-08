## Context

The BLISS mockup replicates a Behance UX/UI design for a mental health app. The architecture is zero-server: all state lives in Angular Signals backed by LocalStorage. The project uses Angular 19 Standalone components, Tailwind CSS v4 with `@theme` tokens, and FontAwesome icons.

## Goals / Non-Goals

**Goals:**
- Deliver a fully navigable mobile-app mockup centered on desktop viewport
- Implement 3 feature domains: responsive layout shell, fake auth flow, mood dashboard
- All state persisted transparently via LocalStorage through a single MockDataService
- Route guard that blocks dashboard access unless "logged in"

**Non-Goals:**
- No real authentication, no HttpClient, no backend
- No production database or API integration
- No Angular Material beyond structural dialogs (re-styled via Tailwind)

## Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| State management | Angular Signals + model() | Per spec/CONTEXT.md — no traditional reactive forms for simple actions |
| Persistence | MockDataService → LocalStorage | Single entry point for all reads/writes; async wrapper for future migration |
| Routing | Standalone canActivate guard reading auth Signal | Lighter than AuthGuard class; works with Signal reactivity |
| Layout shell | CSS `max-w-[430px]` centered + 4-tab bottom nav | Simulates mobile viewport inside desktop browser |
| Notification system | Floating banner (top-right on desktop, top on mobile) with setTimeout auto-dismiss | Matches Behance design's push-notification simulation |

## Risks / Trade-offs

- Signal-based auth guard must be evaluated at route activation time; guard reads `isAuthenticated()` Signal — if Signal changes after guard runs, navigation won't re-trigger. Mitigation: guard returns an Observable that watches the Signal.
- Tailwind v4 requires `@tailwindcss/postcss` plugin, not the classic `tailwind.config.js`; older Angular build documentation may reference v3 patterns.
- FontAwesome icons are imported globally via CSS `@import` — tree-shaking won't work; for a mockup this is acceptable.
