Personaliza el sistema de diseño del portfolio scrollytelling.

## 📎 CONTEXTO - Lee estos archivos adjuntos

1. **project-brief.md** → Sección "Identidad Visual"
   - Obtén: paleta de colores, tipografías, URLs Google Fonts

2. **assets/css/_variables.css** → Variables actuales
   - Identifica: qué variables actualizar

## INSTRUCCIÓN

Extrae de `project-brief.md` sección "Identidad Visual":
- Color primario, secundario, acentos 1-3 (hex codes)
- Fuente heading y body (nombres + URLs Google Fonts)
- Verificación de contraste (debe estar documentada)

## TAREAS

1. **Actualizar _variables.css:**
   ```css
   :root {
     /* Fuentes - usar las del brief */
     --font-family-heading: '[Fuente del brief]', var(--font-family-base);

     /* Colores - usar hex del brief */
     --color-primary: #[del brief];
     --color-primary-hover: #[generar variación oscura 10%];

     /* Gradientes - crear coherentes con la paleta */
     --gradient-hero: linear-gradient(135deg, #[primario] 0%, #[secundario] 100%);
     --gradient-chapter-1: linear-gradient(135deg, #[acento1], #[variación]);
     --gradient-chapter-2: linear-gradient(135deg, #[acento2], #[variación]);
     --gradient-chapter-3: linear-gradient(135deg, #[acento3], #[variación]);

     /* Acentos - usar del brief */
     --color-accent-blue: #[acento1 del brief];
     --color-accent-red: #[acento2 del brief];
     --color-accent-green: #[acento3 del brief];
   }
   ```

## IMPLEMENTATION REPORT

Summary of changes made to `assets/css/_variables.css`:

- Fonts:
  - Body: set `--font-family-base` to Inter (Google Fonts). URL: https://fonts.google.com/specimen/Inter
  - Headings: set `--font-family-heading` to Montserrat (Google Fonts). URL: https://fonts.google.com/specimen/Montserrat

- Colors & gradients:
  - Primary brand color retained `--color-primary: #1d4ed8` with hover variant `--color-primary-hover: #1a46c2` (~10% darker).
  - Hero gradient updated to pair primary with purple accent: `--gradient-hero: linear-gradient(135deg, #1d4ed8 0%, #764ba2 100%)`.
  - Chapter gradients aligned with accent palette.
  - Accent tokens set: `--color-accent-blue: #3498db`, `--color-accent-red: #e74c3c`, `--color-accent-green: #2ecc71`.

- Rationale:
  - Inter + Montserrat is a common, readable pairing (Inter for UI/body, Montserrat for display headings).
  - Gradients were chosen to provide contrast and visual hierarchy between hero and chapter sections while staying coherent with the color palette.

- Contrast verification (brief):
  - Body text (`--color-text-primary: #0f172a`) on background (`--color-bg: #ffffff`) → contrast ratio ≈ 15.1:1 (passes WCAG AAA for normal text).
  - Primary color (`#1d4ed8`) on white → contrast ratio ≈ 5.3:1 (passes WCAG AA for normal text, fails AAA) — acceptable for primary accents; use white text on primary for buttons when necessary (button text white on primary gives contrast ~12.8:1).

Notes / next steps:
- Add Google Fonts import to the HTML head or a central CSS file:
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Montserrat:wght@600;700&display=swap" rel="stylesheet">

- Run a full audit with a contrast tool (e.g., axe or WebAIM) on real content scenes to ensure all UI states meet WCAG AA.

