# 🍃 bliss. — Mindful Mental Health App Mockup

[![Angular](https://img.shields.io/badge/Angular-19.0+-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Architecture](https://img.shields.io/badge/Architecture-Standalone_%26_Signals-007ACC?style=for-the-badge)](https://angular.dev/guide/signals)

> **bliss.** es un prototipo interactivo y mockup funcional de alta fidelidad diseñado para promover el bienestar y el ahorro consciente de energía mental. Este proyecto replica la experiencia UX/UI premium del aclamado diseño conceptual en Behance, adaptado a una arquitectura web moderna y fluida.

🎨 **Inspiración de Diseño:** [BLISS App UX/UI Design en Behance](https://www.behance.net/gallery/252294393/BLISS-app-UXUI-Design)  
📁 **Gobernanza del Repositorio:** Proyecto gestionado bajo el estándar de desarrollo modular **SSD (Spec-Driven Development)** mediante agentes autónomos de código.

---
<img width="555" height="439" alt="Screenshot_10" src="https://github.com/user-attachments/assets/e60dd3bc-ee09-4c2c-984c-b6d5484e986d" />


## ✨ Características Destacadas (UX/UI Spec)

*   **🧘 Splash & Onboarding Fluido:** Pantalla de carga etérea con gradientes radiales pastel suavizados y transiciones lentas que inducen un estado de calma desde el primer segundo.
*   **🧠 Selector de Estados de Ánimo (5 Moods Grid):** Un panel interactivo reactivo de 5 estados emocionales abstractos (*Radiant, Good, Okay, Low, Stressed*) mapeado con micro-interacciones estéticas y paletas cromáticas independientes.
*   **📊 Mood Tracker & Historial Emocional:** Simulación visual de tendencias semanales mediante gráficos suavizados (curvas Bézier interpoladas con SVG) y un mapa de calor mensual en formato calendario compacto.
*   **🔔 Mock Notifications System:** Un servicio inyectable local que simula alertas móviles push o correos de soporte de forma flotante (`ToastComponent`) cuando se registran estados de ánimo críticos.
*   **🔒 Zero-Cloud Architecture:** Todo el estado de la sesión, configuración de metas del usuario y bitácoras diarias persisten localmente a través de `LocalStorage` usando la reactividad nativa de **Angular Signals**.

---

## 🎨 Paleta Cromática & Dirección de Arte

La interfaz utiliza una base minimalista Zen contemporánea combinada con desenfoques de fondo esmerilados (`backdrop-blur`) y curvas de contenedor ultra redondeadas:

*   **Fondo Base:** `#F4F7FB` / `#F8FAFC` (Off-white relajante).
*   **The Bliss Gradients:** Difuminados radiales compuestos de Azul Lavanda (`#D2E0FC`), Verde Menta (`#DCFCE7`), y Rosa Melocotón (`#FFF0F5`).
*   **Gobernanza de Componentes:** Diseños estilizados directamente vía Tailwind CSS para omitir las estructuras rígidas y forzar un lenguaje visual de bordes `rounded-[32px]`.

---

## 🛠️ Stack Tecnológico

*   **Framework Core:** Angular 19+ (Componentes estrictamente *Standalone*).
*   **Gestión de Estado:** `Signals` nativos (`signal()`, `computed()`, `model()`) para una reactividad síncrona sin sobrecarga de RxJS.
*   **Sistema de Estilos:** Tailwind CSS con tokens de diseño personalizados en la configuración del núcleo.
*   **Iconografía:** FontAwesome + custom inline SVG icons for mood buttons and onboarding illustrations.

---

## 📂 Estructura de Especificaciones (SSD Layout)

El ciclo de desarrollo de esta aplicación se rige por especificaciones rígidas ubicadas en el directorio `spec/` de la raíz:

```text
spec/
├── constitution/
│   ├── mision-vision.md      # Filosofía y guardarraíles de Bliss
│   ├── tech.stack.md         # Bloqueo del stack técnico ligero
│   └── roadmap.md            # Fases de entrega de la interfaz
├── features/
│   ├── 001-responsive-layout # Shell responsivo y barra de navegación flotante
│   ├── 002-login-build       # Flujo de autenticación ficticio y guards locales
│   └── 003-user-persona-form # Dashboard emocional y gestor de toas flotantes
├── CONTEXT.md                # Estado actual y restricciones activas globales
└── AGENTS.md                 # Registro de subagentes del ecosistema OpenCode
```

---

## Screens (Route Map)

| Screen | Route | Description |
|--------|-------|-------------|
| Onboarding | `/onboarding` | 3-slide carousel (first visit only): Find Your Inner Peace → Track Your Journey → Grow Together. Slide dots, Skip button, Next/Get Started. Persists `bliss_onboarding` flag. |
| Splash | `/splash` | Full-screen radial gradient, SVG lotus isotipo, "bliss." wordmark, progress bar. Auto-routes to onboarding (first visit) or login. |
| Login | `/login` | Email/password inputs with icons, Sign In button, Google OAuth button, register toggle. |
| Dashboard | `/dashboard` | Time-based greeting, SVG initials avatar, 5 mood cards (Radiant/Good/Okay/Low/Stressed) with custom SVG icons in a grid layout, activity cards. Stressed mood triggers support notification. |
| Mood | `/mood` | SVG 7-day line chart with gradient, mini calendar heat map (reads from LocalStorage), day detail card with notes. |
| Community | `/community` | Support group cards (Anxiety Support Circle, Mindfulness for Beginners) with overlapping avatars + Join Room button, resource article cards. |
| Profile | `/profile` | Avatar ring with gradient, name, streak counter, goals progress bars, settings toggles (persisted). |

## Services

| Service | Role |
|---------|------|
| `MockAuthService` | Login/register/logout with LocalStorage-backed user, computed `isAuthenticated` signal. |
| `MockNotificationService` | `emit()`, `dismiss()`, `emitSupportEmail()` — toast notifications with 5s auto-dismiss. |
| `MockNavigationService` | Bottom nav tab state and routing. |

## Design System (Purple Palette)

Custom Tailwind tokens in `tailwind.config.js`:
- `bg-bliss-lavender` / `bg-bliss-mauve` — primary accent
- `bg-bliss-soft-dark` / `bg-bliss-dark` — text and active states
- `bg-bliss-cream` — page backgrounds
- `rounded-bliss` (1.5rem) — card radius
- `font-bliss-display` (Outfit) — display type
- `animate-banner-in` / `animate-fade-in` / `animate-slide-up` — micro-interactions

## Quick Start

```bash
ng serve        # Dev server at http://localhost:4200
ng build        # Production build to dist/
```

## Project Structure

```
src/
├── app/
│   ├── core/guards/              — auth.guard.ts
│   ├── features/
│   │   ├── onboarding/           — onboarding.component.ts
│   │   ├── splash/               — splash.component.ts
│   │   ├── login/                — login.component.ts
│   │   ├── dashboard/            — dashboard.component.ts
│   │   ├── mood/                 — mood.component.ts
│   │   ├── community/            — community.component.ts
│   │   └── profile/              — profile.component.ts
│   ├── shared/
│   │   ├── services/             — MockAuth, MockNotification, MockNavigation
│   │   └── components/           — notification-banner.component.ts
│   ├── shell/                    — shell.component.ts, header, nav-bar
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.component.ts
├── styles.css                    — Tailwind directives
├── tailwind.config.js            — Custom design tokens
├── angular.json
└── spec/                         — SSD specifications
```
