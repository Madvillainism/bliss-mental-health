# 001-responsive-layout — Spec

## Overview
Mobile viewport mockup shell centered on desktop, Tailwind BLISS design tokens, bottom navigation bar, and app header.

## Viewport Wrapper
- Centered `max-w-[430px]` shell with `min-h-[100dvh]`
- Glassmorphism border (`rounded-3xl`, `backdrop-blur-xl`, `border border-bliss-glass-border`)
- On viewports < 430px: full-width, no rounded corners

## Design Tokens (`src/styles.css` via `@theme`)
| Token | Value | Usage |
|---|---|---|
| `bliss-lavender` | `#c4b5fd` | Primary accent |
| `bliss-soft-lavender` | `#ddd6fe` | Gradient start |
| `bliss-sky` | `#bae6fd` | Secondary accent |
| `bliss-soft-sky` | `#e0f2fe` | Gradient mid |
| `bliss-rose` | `#fda4af` | Destructive/alert |
| `bliss-soft-rose` | `#fecdd3` | Soft alert bg |
| `bliss-mint` | `#a7f3d0` | Positive/success |
| `bliss-cream` | `#fef9f0` | Page background |
| `bliss-dark` | `#1e1b2e` | Text primary |
| `bliss-soft-dark` | `#2d2a44` | Text secondary |
| `bliss-muted` | `#8b87a0` | Text muted |
| `bliss-glass` | `rgba(255,255,255,0.15)` | Glass bg |

## Bottom Navigation
- 4 tabs: Home, Mood, Community, Profile
- Each tab: FontAwesome icon + label
- Active tab: `text-bliss-mauve` + indicator dot
- Inactive: `text-bliss-muted`
- Active tab tracked by Signal in `MockNavigationService`
- Routes: `/dashboard`, `/mood`, `/community`, `/profile`

## App Header
- "BLISS" wordmark in `font-bliss-display`
- FontAwesome bell icon (notification indicator)
- Fixed top, `backdrop-blur` background
