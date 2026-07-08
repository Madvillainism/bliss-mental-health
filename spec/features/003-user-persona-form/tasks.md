# Tasks — 003-user-persona-form

| # | Task | Owner | Status |
|---|---|---|---|
| 1 | Create `shared/services/mock-notification.service.ts` with `Notification` interface, `notifications` Signal, `emit()`, `dismiss()`, `emitSupportEmail()` methods | TypeScript-Expert-Agent | Pending |
| 2 | Create `features/dashboard/dashboard.component.ts` with 5 mood cards grid, staggered entry animation, selection Signal, LocalStorage persistence with date key | Frontend-Design-Agent | Pending |
| 3 | Implement mood card selection logic: `scale-105` + accent border for selected, 50% opacity for unselected, gradient background per mood level | Frontend-Design-Agent | Pending |
| 4 | Wire Critical mood → `MockNotificationService.emitSupportEmail()` in dashboard component | TypeScript-Expert-Agent | Pending |
| 5 | Create `features/profile/profile.component.ts` with `model()` Signals for name, ageRange, goals, LocalStorage load/save, success toast | Frontend-Design-Agent | Pending |
| 6 | Create `shared/components/notification-banner/notification-banner.component.ts` with fixed positioning, `@for` loop over notifications, `banner-in`/`banner-out` animations, auto-dismiss 5s timer, close button | Frontend-Design-Agent | Pending |
| 7 | Verify banner stacks: emit 3 notifications rapidly → confirm vertical stacking with gap | Bliss-Orchestrator | Pending |
| 8 | Verify persistence: select mood → refresh → mood still highlighted for today | Bliss-Orchestrator | Pending |
| 9 | Verify critical trigger: select "Critical" → banner appears within 300ms → auto-dismisses after 5s | Bliss-Orchestrator | Pending |
