# 003-user-persona-form — Spec

## Overview
Interactive mood selector dashboard, persona profile form, and floating fake email notification banner system.

## Daily Mood Selector
- 5 mood cards arranged in a responsive grid
- Each card: large emoji illustration + text label
- Background gradient adapts to mood tone:
  - Great → `bliss-mint`
  - Good → `bliss-sky`
  - Okay → `bliss-lavender`
  - Low → `bliss-peach`
  - Critical → `bliss-rose`
- Selection persists to `localStorage` with key `bliss_mood_YYYY-MM-DD`
- Previously-selected mood highlighted on same-day return
- "Critical" selection triggers notification immediately

**Micro-interactions:**
- Staggered `slide-up` entry animation on cards (50ms delay between each)
- `scale-105` + BLISS accent border on selection
- Unselected cards dim to 50% opacity
- Hover/press: `scale-[0.98]` on `:active`

## Persona Profile Form
- Fields: name (text), age range (select), wellness goals (multi-select checkboxes)
- Age range options: 18-24, 25-34, 35-44, 45+
- Goals: Stress Management, Better Sleep, Mindfulness, Anxiety Relief, Self Care
- `model()` Signal binding on all fields
- LocalStorage key: `bliss_user_profile`
- Save button triggers write + 2s success toast

## Floating Notification Banner System

### MockNotificationService
- Injected via `providedIn: 'root'`
- `notifications: Signal<Notification[]>` holds active banners
- `emit(title, message)` pushes a new notification
- Auto-assigns unique ID and timestamp
- Methods: `dismiss(id)`, `emitSupportEmail()` (pre-composed support message)

### Banner Component
- Fixed position: `top-4 right-4` on desktop, `top-4 inset-x-4` on mobile
- `banner-in` animation on appear (slide + scale)
- `banner-out` animation on dismiss
- Content: envelope icon, "Support Team" title, message body, `×` close button
- Stacks vertically with gap
- `setTimeout` auto-dismiss after 5s

### Trigger Flow
1. User selects "Critical" mood
2. `MockNotificationService.emitSupportEmail()` called
3. Banner slides in
4. After 5s (or manual close) → banner slides out → removed from DOM
