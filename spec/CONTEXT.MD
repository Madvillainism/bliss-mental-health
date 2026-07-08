# BLISS Mockup - Global Context Ledger (context7)

## 📌 Estado Actual del Proyecto

- **Fase:** Sincronización Inicial de Entorno SSD.
- **Entorno:** Angular 19 Standalone listo para desarrollo modular de la UI de Behance.

## 🛠️ Restricciones de Código Activas (Strict Guardrails)

1. **Fidelidad Visual Absoluta:** Prohibido usar estilos por defecto de Angular Material que rompan el lenguaje visual de BLISS. Todo componente de Material debe ser re-estilizado vía Tailwind para heredar los bordes redondeados y gradientes premium.
2. **Reactividad Moderna:** Queda prohibido el uso de formularios reactivos tradicionales pesados para acciones simples; se preferirá el enlazado bidireccional directo acoplado a `Signals` (`model()`) para acelerar la velocidad del prototipo.
3. **Manejo de Datos Local:** Toda mutación o guardado de estado del mockup debe resolverse en servicios globales en memoria (`/shared/services/mock-data.service.ts`) con respaldo asíncrono hacia `LocalStorage`. No se añadirán librerías de red (HttpClient) en esta fase.
