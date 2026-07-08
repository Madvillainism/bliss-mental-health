# Implementation Plan — 003-user-persona-form

## Phases

### Phase 1: MockNotificationService
- Create `shared/services/mock-notification.service.ts`
- `Notification` interface: `{ id, title, message, timestamp }`
- `notifications: Signal<Notification[]>`
- `emit(title, message)`, `dismiss(id)`, `emitSupportEmail()`
- Auto-ID via counter + `Date.now()`

### Phase 2: Mood Selector Component
- Create `features/dashboard/dashboard.component.ts`
- 5 mood cards with emoji and label
- Mood data array with associated gradient colors
- Selection state managed via Signal
- LocalStorage read/write for `bliss_mood_YYYY-MM-DD`
- Critical mood → calls `MockNotificationService.emitSupportEmail()`

### Phase 3: Persona Profile Form
- Create `features/profile/profile.component.ts`
- Model() Signals for name, ageRange, goals
- Age range as `<select>`, goals as checkbox group
- Load from LocalStorage on init
- Save button writes to `bliss_user_profile`
- Success toast (temporary inline message, 2s)

### Phase 4: Notification Banner
- Create `shared/components/notification-banner/notification-banner.component.ts`
- Fixed positioning responsive to viewport
- `@for` loop over `notifications()` Signal
- Entry/exit animations via CSS classes
- Auto-dismiss with `setTimeout` per notification
- Close button for manual dismiss

## Files Affected
| File | Purpose |
|---|---|
| `shared/services/mock-notification.service.ts` | Notification state management |
| `shared/components/notification-banner/notification-banner.component.ts` | Banner UI |
| `features/dashboard/dashboard.component.ts` | Mood selector |
| `features/profile/profile.component.ts` | Persona form |
| `app/app.routes.ts` | Dashboard + profile routes |
