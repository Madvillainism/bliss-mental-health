# Implementation Plan — 001-responsive-layout

## Phases

### Phase 1: Tailwind Design Tokens
- Define `@theme` block in `src/styles.css` with all color tokens, font families, radii, and animations
- Verify build compiles with `ng build`

### Phase 2: Shell Component
- Create `src/app/shell/shell.component.ts` (Standalone)
- Implement centered viewport wrapper with responsive breakpoint logic
- Add glassmorphism border and backdrop blur
- Inject `MockNavigationService` for tab state

### Phase 3: Bottom Navigation Bar
- Create `src/app/shell/nav-bar/nav-bar.component.ts`
- 4 tabs with FontAwesome icons
- Signal-bound active tab highlighting
- Tab → Router navigation via Angular Router
- Active indicator dot animation

### Phase 4: App Header
- Create `src/app/shell/header/header.component.ts`
- BLISS wordmark display
- Notification bell icon
- Fixed positioning with backdrop blur

## Files Affected
| File | Purpose |
|---|---|
| `src/styles.css` | Design tokens |
| `src/app/shell/shell.component.ts` | Viewport wrapper |
| `src/app/shell/nav-bar/nav-bar.component.ts` | Bottom nav |
| `src/app/shell/header/header.component.ts` | Top header |
| `src/app/app.routes.ts` | Route definitions for tabs |
| `src/shared/services/mock-navigation.service.ts` | Active tab Signal |

## Dependencies
- Tailwind CSS v4 with `@tailwindcss/postcss`
- FontAwesome CSS import
