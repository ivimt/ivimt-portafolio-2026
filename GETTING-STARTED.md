# Getting Started with Your WEB ATELIER Project

> **Build a real, deployable web project with AI-assisted development.**

---

## Quick Start

1. **Use this template** to create your project repository
2. **Fill out** [`project-brief.md`](./project-brief.md) to define your project
3. **Collect inspiration** in [`project-inspiration.md`](./project-inspiration.md)
4. **Follow your track's sessions** for guided development
5. **Commit once per session** with meaningful progress

---

## Project Structure

```
your-project/
├── index.html              # Your main page
├── assets/
│   ├── css/
│   │   ├── style.css       # Main entry (imports all partials)
│   │   ├── _variables.css   # Design tokens
│   │   ├── _reset.css      # Browser reset
│   │   ├── _base.css       # Typography, links
│   │   ├── _layout.css     # Containers, grids
│   │   ├── _components.css # Header, footer, buttons, cards
│   │   ├── _utilities.css  # Helper classes
│   │   ├── _accessibility.css
│   │   ├── _responsive.css
│   │   └── _print.css
│   └── js/
│       └── main.js         # JavaScript functionality
├── images/                 # Your optimized images
├── docs/                   # Documentation (plans, reports)
│   └── plan-*.md           # AI development plans
├── project-brief.md        # Your project definition
├── project-inspiration.md  # References and moodboard
├── project.yaml            # Project metadata
└── README.md               # Project documentation
```

---

## The ATELIER Method

Every session follows this cycle:

| Phase            | Focus                        | Output            |
| ---------------- | ---------------------------- | ----------------- |
| **A**rchitecture | Think like a product manager | Plan document     |
| **T**echnical    | Build with modern standards  | Working code      |
| **E**xperience   | Design for users             | Polished UI/UX    |
| **L**aunch       | Deploy early and often       | Live URL          |
| **I**terate      | Refine based on feedback     | Improvements      |
| **E**xhibit      | Present with confidence      | Demo/presentation |
| **R**eflect      | Document learnings           | Reflection notes  |

---

## AI-Assisted Development (Docs-First)

Use AI tools ethically and intentionally. For any **non-trivial task**:

### Phase 1: Planning (Required)

```markdown
Generate a development plan for [feature] with:

1. Overview and success criteria
2. Implementation phases
3. Architecture decisions
4. Testing strategy

Document in docs/plan-[feature].md. Do not implement yet.
```

### Phase 2: Implementation

```markdown
Following the plan in docs/plan-[feature].md, implement Phase [N]:

[Task description]

Constraints:

- Follow design system in assets/css/style.css
- Ensure WCAG AA accessibility
- Mobile-first responsive (320px-1920px)
- Progressive enhancement

Generate implementation report after.
```

### Good AI Usage

- ✅ Plan before implementing
- ✅ Ask for 2-3 options with trade-offs
- ✅ Request WCAG AA compliance
- ✅ Document decisions
- ✅ Test generated code

### Poor AI Usage

- ❌ Copy without understanding
- ❌ Skip planning phase
- ❌ Ignore accessibility
- ❌ Let AI make creative decisions

> 📚 Full guide: [AI-Assisted Development Methodology](../../web-foundations/docs/methodology/en/ai-practical-guide/)

---

## Your First Steps

### Step 1: Define Your Project

Open [`project-brief.md`](./project-brief.md) and complete:

- **What** you're building
- **Who** it's for
- **Why** it matters
- Your **technical goals**

### Step 2: Gather Inspiration

Use [`project-inspiration.md`](./project-inspiration.md) to:

- Explore current web design trends
- Collect visual references
- Define your aesthetic direction
- Set technical learning goals

### Step 3: Set Up Your Environment

- [ ] Code editor (VS Code, Cursor)
- [ ] Git installed
- [ ] Live Server extension
- [ ] Browser with DevTools

### Step 4: Follow Your Track

Your instructor will provide a **track** with session-by-session guidance:

- Each session: 3-3.5 hours
- Each session produces: deployable progress
- Each session requires: 1 meaningful commit

---

## Design System

Your `assets/css/style.css` includes CSS custom properties:

```css
:root {
	/* Colors - Customize these */
	--color-primary: #1d4ed8;
	--color-text: #0f172a;
	--color-bg: #ffffff;

	/* Typography */
	--font-heading: system-ui, sans-serif;
	--font-body: system-ui, sans-serif;

	/* Spacing scale */
	--space-xs: 0.5rem;
	--space-sm: 1rem;
	--space-md: 1.5rem;
	--space-lg: 2rem;
	--space-xl: 3rem;
}
```

**Customize** these values to match your project's visual identity.

### Modular CSS Architecture

The stylesheet is split into **partials** (files starting with `_`) for modularization:

| Partial              | Purpose                                     |
| -------------------- | ------------------------------------------- |
| `_variables.css`     | Design tokens (colors, spacing, typography) |
| `_reset.css`         | Browser default overrides                   |
| `_base.css`          | Typography, links, raw HTML elements        |
| `_layout.css`        | Containers, grids, main structure           |
| `_components.css`    | Header, footer, buttons, cards              |
| `_utilities.css`     | Single-purpose helpers (text-center, mt-md) |
| `_accessibility.css` | sr-only, skip-link, reduced motion          |
| `_responsive.css`    | Breakpoint overrides                        |
| `_print.css`         | Print-specific styles                       |

**Why modularize?** Each file has one concern. Change a color in `_variables.css` → it updates everywhere. Add a component → create `_my-component.css` and import it in `style.css`. Read the pedagogical comments in each partial to learn more.

---

## Quality Standards

Every project should meet:

### Technical

- ✅ Valid HTML5 ([W3C Validator](https://validator.w3.org/))
- ✅ Valid CSS ([CSS Validator](https://jigsaw.w3.org/css-validator/))
- ✅ No JavaScript errors
- ✅ Lighthouse 90+ (Performance, Accessibility, Best Practices, SEO)

### Design

- ✅ WCAG AA contrast (4.5:1 for text)
- ✅ Responsive 320px-1920px
- ✅ Consistent typography and spacing
- ✅ Meaningful interactions

### Process

- ✅ Plans documented before implementation
- ✅ 1 commit per session minimum
- ✅ README updated with progress
- ✅ Reflection documented

---

## Deployment

### GitHub Pages (Default)

1. Push code to `main` branch
2. Go to Settings → Pages
3. Source: Deploy from branch → main
4. Your site: `https://[username].github.io/[repo]/`

### Custom Domain (Optional)

Add a `CNAME` file with your domain name.

---

## Resources

### Documentation

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [web.dev](https://web.dev/)

### Design Inspiration

- [Awwwards](https://www.awwwards.com/)
- [Land-book](https://land-book.com/) — Curated web design gallery
- [Dribbble](https://dribbble.com/)

### Tools

- [Coolors](https://coolors.co/) - Color palettes
- [Google Fonts](https://fonts.google.com/) - Typography
- [TinyPNG](https://tinypng.com/) - Image optimization
- [WebAIM](https://webaim.org/resources/contrastchecker/) - Contrast checker

---

## Need Help?

1. **Check the track sessions** for detailed guidance
2. **Use AI** following the docs-first methodology
3. **Ask classmates** during peer review sessions
4. **Consult your instructor** for project-specific questions

---

**Remember**: You're not just learning to code—you're building a professional portfolio piece.

Ship fast. Design excellently. Code professionally. Present confidently.

---

© WEB ATELIER (UDIT) · [web-foundations](../../web-foundations/)
