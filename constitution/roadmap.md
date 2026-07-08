# Roadmap de Desarrollo - BLISS UI System

### 📍 Fase 1: Base de Diseño y Layout Responsivo (`001-responsive-layout`)

- [ ] Configurar el sistema de diseño en `tailwind.config.js` (colores pastel de BLISS, fuentes y sombras suaves).
- [ ] Construir el Shell responsivo (simulación de viewport de dispositivo móvil centrado en pantallas de escritorio).
- [ ] Maquetar la barra de navegación inferior minimalista y el header de la aplicación.

### 📍 Fase 2: Autenticación Ficticia y Onboarding (`002-login-build`)

- [ ] Crear el flujo estético de pantallas de bienvenida (Intro Splash con gradientes).
- [ ] Desarrollar el formulario de Login y Registro persistido únicamente en LocalStorage.
- [ ] Implementar guards simulados basados en un `Signals-Service` para denegar el acceso al Dashboard si no se ha "iniciado sesión".

### 📍 Fase 3: Dashboard Emocional y Formularios (`003-user-persona-form`)

- [ ] Maquetar la pantalla principal de Bliss: selector de estado de ánimo diario mediante micro-interacciones.
- [ ] Crear el formulario de creación de perfil/persona de usuario para personalizar los ejercicios de salud mental recomendados.
- [ ] Acoplar el Mockup de alertas: cada vez que el usuario registre un estado de ánimo "Crítico", disparar una notificación flotante simulando un email de soporte.
