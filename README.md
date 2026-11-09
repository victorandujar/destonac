# Destonac — propuesta web

> **Propuesta de diseño no oficial** preparada por Web Local Growth. No es la web oficial de Destonac S.L.

| | |
|---|---|
| **Cliente potencial** | Destonac S.L. · Ctra. de Sant Climent 73, Local 6, Viladecans · 930 02 72 00 · destonac@destonac.cat |
| **Objetivo** | Darles su primera web propia: hoy su dominio no lleva a ninguna parte |
| **Alcance** | Página única: portada con edificio animado, recorrido por plantas, especialidades, mantenimiento y contacto; aviso legal y privacidad |
| **Estado** | Demo terminada · `PUBLIC_IS_DEMO=true` |

## Por qué (auditoría, 09/11/2026)

- `https://destonac.cat` solo contiene una redirección `<meta refresh>` a `http://destonac.xarxaindustrial.net` (HTTP, sin cifrar).
- **Ese subdominio no existe:** quien teclea su dominio acaba en un error.
- Su única presencia es una ficha en el directorio Xarxa Industrial, en catalán, con fotos y datos.

## Identidad: "De la cubierta a la oficina"

- **Marca:** logotipo vectorizado en dos tintas (`src/assets/brand/logo.svg`). Marino `#104080`, celeste de las alas `#58B8D8` y el oro del marco de su marca (`#C0A048`) solo para el aviso de demo.
- **Lenguaje:** plano técnico. Sección de edificio en líneas finas sobre fondo cuadriculado, y especificaciones en mono.
- **Tipografía:** IBM Plex Sans y Plex Mono, de tono ingenieril y adecuadas para empresa y particular. Autoalojadas.

## Funcionalidades

- **Edificio en SVG** (`Building.astro`): cubierta con máquinas y grúa, fachada, techo técnico con conductos, oficina y vivienda. El aire circula por los conductos y los ventiladores giran (solo CSS, se detiene con `prefers-reduced-motion`).
- **Recorrido por plantas** (`Recorrido.astro` + `src/scripts/recorrido.ts`):
  - Al hacer scroll, el edificio queda fijo y se ilumina la planta que se está leyendo.
  - Cada planta tiene sus fotos reales.
  - En móvil, una barra fija indica la planta actual.
- **Entradas al hacer scroll** (`src/scripts/reveal.ts`): textos que suben y fotos que se destapan. Sin JS todo es visible.
- **Contacto:** el formulario valida y prepara un email a destonac@destonac.cat. No hay backend; su teléfono es fijo, así que no hay WhatsApp.
- **SEO:** JSON-LD `HVACBusiness`, sitemap, canonical y Open Graph. En modo demo, `noindex`.

## Calidad

| | Resultado |
|---|---|
| `astro check` / `astro build` | 0 errores · 0 avisos |
| Lighthouse móvil (modo producción) | **100 · 100 · 100 · 100** · LCP 1,6 s · CLS 0 |
| Lighthouse escritorio | 100 · 100 · 100 · 100 |
| Responsive | Sin scroll horizontal a 390 y a 1440 px |

## Recursos y pendientes

- **Fotos y logotipo:** de su ficha pública en xarxaindustrial.net (`src/assets/obras/`, bordes blancos recortados). Son suyos; solo se usan en esta propuesta privada y para publicar hace falta su autorización.
- **Valoración (8,7/10, 145 reseñas):** sacada de Trustlocal mediante un buscador, sin verificar en la propia página. Confirmar.
- **Pendientes:**
  - NIF.
  - Horario: los directorios dan horarios contradictorios.
  - Versión en catalán: su ficha está en catalán.
  - Validar los textos de cada planta.

## Ejecutar y desplegar

```bash
npm install
npm run dev
npm run build
```

En Vercel: importar el repo (raíz por defecto) y añadir `PUBLIC_IS_DEMO=true`. Para producción: `PUBLIC_IS_DEMO=false` y `SITE_URL=https://destonac.cat` (y retirar la redirección actual del dominio).
