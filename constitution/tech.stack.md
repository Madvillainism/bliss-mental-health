# Stack Tecnológico Expandido - BLISS Mockup

## 🛠️ Tecnologías Core

- **Framework:** Angular 19+ (Arquitectura estrictamente _Standalone_ y reactividad nativa mediante _Signals_ para emular los estados de sesión).
- **Estilos:** Tailwind CSS (Uso intensivo de gradientes pastel personalizados, desenfoques de fondo `backdrop-blur` y bordes súper redondeados `rounded-3xl` según el diseño de BLISS).
- **Componentes Base:** Angular Material (restringido a animaciones sutiles o componentes estructurales como modales/diálogos si es necesario).
- **Librería de Iconos:** FontAwesome (Iconografía minimalista de bienestar).

## 🗄️ Persistencia y Mockeo (Zero-Server Architecture)

- **Persistencia Temporal:** `LocalStorage` para simular que las credenciales de Login persisten o que el perfil del usuario guarda su "estado de ánimo diario".
- **Notificaciones Falsas:** Servicio inyectable interactivo que dispara banners temporales en pantalla imitando correos de alerta o notificaciones push móviles nativas mediante alertas flotantes de Tailwind con temporizadores.

Este proyecto es solo un Mockup funcional de un proyecto de Mental Health App llamado Bliss.

Debido a esto, no se usaran bases de datos ni manejo de información solido, todo será manejado en LocalStorage y valores hardcodeados.
