# LC Education Consulting — Website

Source repository for the LC Education Consulting website, built with Eleventy, Sass, and esbuild. Deployed via Netlify.

## Tech Stack

| Layer | Tool |
| ----- | ---- |
| Static site generator | [Eleventy 3.x](https://www.11ty.dev/) |
| Templating | Nunjucks (`.njk`) |
| CSS | Sass (SCSS) → compiled to `dist/css/main.css` |
| JavaScript | esbuild → compiled to `dist/js/main.js` |
| Forms | Netlify Forms with reCAPTCHA |
| Fonts | Google Fonts CDN — Lato 400 & 700 only |
| Analytics | Umami (replace `YOUR_WEBSITE_ID` in `head.njk`) |

## Project Structure

lcec/
├── src/
│   ├── _data/
│   │   └── site.json              # Global site metadata (URL, phone, email, etc.)
│   ├── _includes/
│   │   ├── layouts/               # Page-level Nunjucks layouts
│   │   │   ├── base.njk           # Base HTML shell
│   │   │   ├── index.njk          # Homepage
│   │   │   ├── our-story.njk
│   │   │   ├── why-choose-us.njk
│   │   │   ├── accessibility-services.njk
│   │   │   ├── portfolio.njk
│   │   │   ├── webinars-and-training.njk
│   │   │   ├── contact.njk
│   │   │   └── contact-success.njk
│   │   └── partials/              # Reusable Nunjucks partials
│   │       ├── head.njk           # &lt;head&gt; with SEO, OG, JSON-LD
│   │       ├── header.njk         # Site header and nav
│   │       ├── footer.njk         # Site footer
│   │       ├── social-section.njk # "Connect With Us" LinkedIn section
│   │       ├── cta-schedule.njk   # "Ready to Get Started?" blue CTA banner
│   │       └── cookie-banner.njk  # Cookie consent banner
│   ├── scss/
│   │   ├── main.scss              # Entry point — imports all partials
│   │   ├── _variables.scss        # Design tokens (colors, spacing, type)
│   │   ├── _reset.scss # CSS reset and base element styles
│   │   ├── _layout.scss # Page wrap, container, section modifiers
│   │   ├── _typography.scss # Heading scale, body link styles
│   │   ├── _nav.scss # Site header and navigation
│   │   ├── _hero.scss # Homepage hero section
│   │   ├── _sections.scss # Page section components
│   │   ├── _components.scss # Buttons, cards, CTA blocks, social links
│   │   ├── _forms.scss # Contact form styles
│   │   ├── _footer.scss # Site footer
│   │   ├── _utilities.scss # Utility classes and external link icon
│   │   └── _cookie-banner.scss # Cookie banner styles
│   ├── js/
│   │   └── main.js                # Nav, cookie banner, form validation, external links
│   ├── img/                       # Images (copied to dist/img at build)
│   ├── static/
│   │   └── _headers               # Netlify HTTP headers config
│   └── content/
│       ├── index.md                   # Homepage content (frontmatter data)
│       ├── our-story.md
│       ├── why-choose-us.md
│       ├── accessibility-services.md
│       ├── portfolio.md
│       ├── webinars-and-training.md
│       ├── contact.md
│       └── contact-success.md
├── build/
│   ├── js.js                      # esbuild script (minifies on build, watches on dev)
│   └── clean.js                   # Cleans dist/ before build
├── dist/                          # Compiled output (not committed)
├── .eleventy.js                   # Eleventy config (HTML minification, passthrough)
├── manifest.webmanifest           # PWA manifest
└── package.json
lcec/
├── src/
│   ├── _data/
│   │   └── site.json              # Global site metadata (URL, phone, email, etc.)
│   ├── _includes/
│   │   ├── layouts/               # Page-level Nunjucks layouts
│   │   │   ├── base.njk           # Base HTML shell
│   │   │   ├── index.njk          # Homepage
│   │   │   ├── our-story.njk
│   │   │   ├── why-choose-us.njk
│   │   │   ├── accessibility-services.njk
│   │   │   ├── portfolio.njk
│   │   │   ├── webinars-and-training.njk
│   │   │   ├── contact.njk
│   │   │   └── contact-success.njk
│   │   └── partials/              # Reusable Nunjucks partials
│   │       ├── head.njk           # &lt;head&gt; with SEO, OG, JSON-LD
│   │       ├── header.njk         # Site header and nav
│   │       ├── footer.njk         # Site footer
│   │       ├── social-section.njk # "Connect With Us" LinkedIn section
│   │       ├── cta-schedule.njk   # "Ready to Get Started?" blue CTA banner
│   │       └── cookie-banner.njk  # Cookie consent banner
│   ├── scss/
│   │   ├── main.scss # Entry point — imports all partials
│   │   ├── _variables.scss # Design tokens (colors, spacing, type)
│   │   ├── _reset.scss # CSS reset and base element styles
│   │   ├── _layout.scss # Page wrap, container, section modifiers
│   │   ├── _typography.scss # Heading scale, body link styles
│   │   ├── _nav.scss # Site header and navigation
│   │   ├── _hero.scss # Homepage hero section
│   │   ├── _sections.scss # Page section components
│   │   ├── _components.scss # Buttons, cards, CTA blocks, social links
│   │   ├── _forms.scss # Contact form styles
│   │   ├── _footer.scss # Site footer
│   │   ├── _utilities.scss # Utility classes and external link icon
│   │   └── _cookie-banner.scss # Cookie banner styles
│   ├── js/
│   │   └── main.js                # Nav, cookie banner, form validation, external links
│   ├── img/                       # Images (copied to dist/img at build)
│   ├── static/
│   │   └── _headers               # Netlify HTTP headers config
│   └── content/
│       ├── index.md                   # Homepage content (frontmatter data)
│       ├── our-story.md
│       ├── why-choose-us.md
│       ├── accessibility-services.md
│       ├── portfolio.md
│       ├── webinars-and-training.md
│       ├── contact.md
│       └── contact-success.md
├── build/
│   ├── js.js                      # esbuild script (minifies on build, watches on dev)
│   └── clean.js                   # Cleans dist/ before build
├── dist/                          # Compiled output (not committed)
├── .eleventy.js                   # Eleventy config (HTML minification, passthrough)
├── manifest.webmanifest           # PWA manifest
└── package.json
```
lcec/
├── src/
│   ├── _data/
│   │   └── site.json              # Global site metadata (URL, phone, email, etc.)
│   ├── _includes/
│   │   ├── layouts/               # Page-level Nunjucks layouts
│   │   │   ├── base.njk           # Base HTML shell
│   │   │   ├── index.njk          # Homepage
│   │   │   ├── our-story.njk
│   │   │   ├── why-choose-us.njk
│   │   │   ├── accessibility-services.njk
│   │   │   ├── portfolio.njk
│   │   │   ├── webinars-and-training.njk
│   │   │   ├── contact.njk
│   │   │   └── contact-success.njk
│   │   └── partials/              # Reusable Nunjucks partials
│   │       ├── head.njk           # <head> with SEO, OG, JSON-LD
│   │       ├── header.njk         # Site header and nav
│   │       ├── footer.njk         # Site footer
│   │       ├── social-section.njk # "Connect With Us" LinkedIn section
│   │       ├── cta-schedule.njk   # "Ready to Get Started?" blue CTA banner
│   │       └── cookie-banner.njk  # Cookie consent banner
│   ├── scss/
│   │   ├── main.scss              # Entry point — imports all partials
│   │   ├── _variables.scss        # Design tokens (colors, spacing, type)
│   │   ├── _reset.scss            # CSS reset and base element styles
│   │   ├── _layout.scss           # Page wrap, container, section modifiers
│   │   ├── _typography.scss       # Heading scale, body link styles
│   │   ├── _nav.scss              # Site header and navigation
│   │   ├── _hero.scss             # Homepage hero section
│   │   ├── _sections.scss         # Page section components
│   │   ├── _components.scss       # Buttons, cards, CTA blocks, social links
│   │   ├── _forms.scss            # Contact form styles
│   │   ├── _footer.scss           # Site footer
│   │   ├── _utilities.scss        # Utility classes and external link icon
│   │   └── _cookie-banner.scss    # Cookie banner styles
│   ├── js/
│   │   └── main.js                # Nav, cookie banner, form validation, external links
│   ├── img/                       # Images (copied to dist/img at build)
│   ├── static/
│   │   └── _headers               # Netlify HTTP headers config
│   └── content/
│       ├── index.md                   # Homepage content (frontmatter data)
│       ├── our-story.md
│       ├── why-choose-us.md
│       ├── accessibility-services.md
│       ├── portfolio.md
│       ├── webinars-and-training.md
│       ├── contact.md
│       └── contact-success.md
├── build/
│   ├── js.js                      # esbuild script (minifies on build, watches on dev)
│   └── clean.js                   # Cleans dist/ before build
├── dist/                          # Compiled output (not committed)
├── .eleventy.js                   # Eleventy config (HTML minification, passthrough)
├── manifest.webmanifest           # PWA manifest
└── package.json
```
```text
lcec/
├── src/
│   ├── _data/
│   │   └── site.json              # Global site metadata (URL, phone, email, etc.)
│   ├── _includes/
│   │   ├── layouts/               # Page-level Nunjucks layouts
│   │   │   ├── base.njk           # Base HTML shell
│   │   │   ├── index.njk          # Homepage
│   │   │   ├── our-story.njk
│   │   │   ├── why-choose-us.njk
│   │   │   ├── accessibility-services.njk
│   │   │   ├── portfolio.njk
│   │   │   ├── webinars-and-training.njk
│   │   │   ├── contact.njk
│   │   │   └── contact-success.njk
│   │   └── partials/              # Reusable Nunjucks partials
│   │       ├── head.njk           # <head> with SEO, OG, JSON-LD
│   │       ├── header.njk         # Site header and nav
│   │       ├── footer.njk         # Site footer
│   │       ├── social-section.njk # "Connect With Us" LinkedIn section
│   │       ├── cta-schedule.njk   # "Ready to Get Started?" blue CTA banner
│   │       └── cookie-banner.njk  # Cookie consent banner
│   ├── scss/
│   │   ├── main.scss              # Entry point — imports all partials
│   │   ├── _variables.scss        # Design tokens (colors, spacing, type)
│   │   ├── _reset.scss            # CSS reset and base element styles
│   │   ├── _layout.scss           # Page wrap, container, section modifiers
│   │   ├── _typography.scss       # Heading scale, body link styles
│   │   ├── _nav.scss              # Site header and navigation
│   │   ├── _hero.scss             # Homepage hero section
│   │   ├── _sections.scss         # Page section components
│   │   ├── _components.scss       # Buttons, cards, CTA blocks, social links
│   │   ├── _forms.scss            # Contact form styles
│   │   ├── _footer.scss           # Site footer
│   │   ├── _utilities.scss        # Utility classes and external link icon
│   │   └── _cookie-banner.scss    # Cookie banner styles
│   ├── js/
│   │   └── main.js                # Nav, cookie banner, form validation, external links
│   ├── img/                       # Images (copied to dist/img at build)
│   ├── static/
│   │   └── _headers               # Netlify HTTP headers config
│   └── content/
│       ├── index.md                   # Homepage content (frontmatter data)
│       ├── our-story.md
│       ├── why-choose-us.md
│       ├── accessibility-services.md
│       ├── portfolio.md
│       ├── webinars-and-training.md
│       ├── contact.md
│       └── contact-success.md
├── build/
│   ├── js.js                      # esbuild script (minifies on build, watches on dev)
│   └── clean.js                   # Cleans dist/ before build
├── dist/                          # Compiled output (not committed)
├── .eleventy.js                   # Eleventy config (HTML minification, passthrough)
├── manifest.webmanifest           # PWA manifest
└── package.json
```

└── package.json
```


All page content (headings, body copy, CTA text, etc.) lives in the frontmatter of the `.md` files in `src/content/`. Layouts read these values via Nunjucks template variables. To update copy, edit the relevant `.md` file in `src/content/` — no template changes needed.

Global data shared across all pages (site URL, phone, email, founder info) is in `src/_data/site.json`.

## Development

```bash
npm install
npm run dev
```

Runs three watchers in parallel:

- Eleventy dev server at `http://localhost:8080`
- Sass (expanded, with source maps)
- esbuild (unminified, with source maps)

## Production Build

```bash
npm run build
```

1. Cleans `dist/`
2. Eleventy compiles templates → minifies HTML (removes comments, collapses whitespace)
3. Sass compiles → compressed CSS (comments stripped)
4. esbuild bundles → minified JS (comments stripped)

## Design Tokens

All spacing, color, and typography values are defined as Sass variables in `src/scss/_variables.scss`. Update tokens there to propagate changes site-wide.

Key tokens:

| Token | Value | Usage |
| ----- | ----- | ----- |
| `$color-primary` | `#556b2f` | Olive green — buttons, links, headings |
| `$color-primary-dark` | `#364519` | Dark green — hover states |
| `$color-primary-light` | `#e3fcc2` | Light green — card backgrounds |
| `$color-accent` | `#1e4d7b` | Steel blue — banner sections |
| `$font-size-page-title` | `1.875rem` | Page/section title headings |
| `$space-4` | `24px` | Standard component spacing |
| `$space-5` | `32px` | Section-level spacing |

## Deployment

The site deploys to Netlify. Build command: `npm run build`. Publish directory: `dist/`.

Netlify Features in use:

- **Forms** — Contact form with reCAPTCHA (enable reCAPTCHA in Netlify dashboard under Site configuration → Forms → Spam filters)
- **Headers** — Custom HTTP headers via `src/static/_headers`

## Notes

- Umami analytics ID must be set in `src/_includes/partials/head.njk` (search `YOUR_WEBSITE_ID`)
- The Map button on the contact page uses `href="#"` as a placeholder — replace with a real Google Maps URL when available
- `site.url` is defined in both `.eleventy.js` (as `addGlobalData`) and `src/_data/site.json` — keep these in sync
