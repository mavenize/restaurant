# Handoff: Tropical un pezzo d'Italia — Home page

## Overview
New home page for tropicalunpezzo.se (Italian restaurant, Kungsträdgården, Stockholm). Swedish only. Target stack: **plain HTML/CSS/JS**, no framework, no build step.

## About the design files
`design-reference.html` is a **design reference built in HTML** — open it in a browser to see the intended look and behaviour (zoom out: desktop 1a, mobile 1b, spec 1c sit side by side). Do not ship it. Recreate it as clean production code in the structure below.

## Fidelity
High-fidelity. Match colours, type, spacing and interactions exactly. Image boxes are placeholders; real photos and logo come from the client.

## Target file structure
```
/index.html
/css/styles.css
/js/main.js
/images/logo.svg, logo-light.svg
/images/hero-800.webp|avif, hero-1600.webp|avif
/images/gelato-800…, gelato-1600…
/images/restaurang-800…, restaurang-1600…
/fonts/*.woff2   (Young Serif, Instrument Sans 400/500/600, IBM Plex Mono 400)
```

## Design tokens
Colours (CSS custom properties on :root):
- `--paper` #F6F1E7 (page background)
- `--ink` #231D18 (text, hours card, footer, mobile menu)
- `--terracotta` #A8432A (primary buttons, eyebrow, lead quote, Två världar band)
- `--line` #E2D9C8 (dividers on paper)
- `--line-dark` #4A423A (dividers on ink)
- `--muted` #6B6358, `--muted-light` #C9BDA7 (footer secondary text)

Type (desktop / mobile):
- Display "Salve!": Young Serif 128 / 72px, line-height .9, letter-spacing -0.03em
- H1 subline: Young Serif 36 / 24px, lh 1.15–1.2
- H2: Young Serif 48 (pasta, hours), 56 (Två världar) / 34–36px, lh 1.05–1.1
- Lead quote: Young Serif 32 / 24px, lh 1.25, terracotta
- Body: Instrument Sans 20 (intro), 18 (pasta) / 17px, lh 1.6
- Nav: Instrument Sans 500, 15px, letter-spacing .04em, uppercase
- Buttons: Instrument Sans 600, 16px (header button 15px)
- Eyebrow: IBM Plex Mono 13 / 11px, letter-spacing .08em, uppercase, terracotta

Spacing & shape:
- Container max 1440px; side padding 64px desktop / 20px mobile
- Two-column grid 5fr / 7fr (pasta section flips to 7fr / 5fr), gap 56px
- Section vertical padding 64–96px desktop / 40–48px mobile
- Buttons: border-radius 999px, padding 18px 28px (header 14px 24px), mobile sticky button height 56px
- Images: radius 4px
- Mobile sticky button shadow: 0 6px 20px rgba(35,29,24,.25)

Breakpoints: ≤767 mobile · 768–1023 tablet (single column stack, 2-col footer nav) · ≥1024 desktop.

## Sections (top to bottom)
1. **Header** — logo (links /), nav MENY (→ /pdf/meny-sv.pdf), CATERING & ABONNERING (→ /sv/catering-abonnering-stockholm-kungstradgarden/), ÖPPETTIDER (button, reopens hours card), Instagram circle 40px (→ instagram.com/tropicalunpezzo), primary "Boka bord →". 1px `--line` bottom border, padding 24px 64px. Mobile: logo 120×36 + 44px round menu toggle, sticky.
2. **Hero** — left: eyebrow "KUNGSTRÄDGÅRDSGATAN 12 · STOCKHOLM", `<h1>` containing "Salve!" (display) and "Vad kul att ni hittat hit! Vi är en italiensk restaurang" (subline); buttons "Boka bord →" (primary) and "Se menyn (PDF)" (secondary). Right: hero photo 640px tall. Hours card (ink, 320px wide, padding 28px) overlaps the photo's bottom-left by -32px / -40px. Mobile: text, then photo 340px, then hours card in flow.
3. **Intro** — top border. Left: lead quote "Tropical Un pezzo D'italia, mitt i kungsträdgården - välkommen in!". Right: intro paragraph (max-width 640px). Mobile: paragraph first, then quote.
4. **Gelato + pasta** — gelato photo 560px (7fr) + H2 "Italiensk pasta i Stockholm" and paragraph (5fr), vertically centred.
5. **Två världar** — terracotta band, white text, H2 "Två världar blir till en hos oss." + paragraph, photo 480px right.
6. **Hours & map** — H2 "Öppettider", hours table (2-col grid, row gap 12px, top border ink), address, "Boka bord →"; Google Maps iframe 480px on the right.
7. **Footer** — ink background, padding 64px; light logo, 3-col nav grid (HEM, MENY, CATERING & ABONNERING, OM OSS, PIZZA, VIN & ÖL); bottom row "© Copyright 2025 tropicalunpezzo.se | info@tropicalunpezzo.se" + Instagram.
8. **Mobile only** — sticky "Boka bord →" pill, 16px from bottom.

All copy is verbatim in `design-reference.html`. Note: "välkommna" is a typo on the live site — confirm fix with client.

## Interactions & behaviour
- **Boka bord** buttons → `https://app.bokabord.se/reservation/?hash=e6ffe59d993ee60529e78c6e3acbc8f4`, `target="_blank" rel="noopener"`.
- **Buttons**: primary hover → background `--ink`; secondary hover → fill `--ink`, text `--paper`. Focus-visible: 2px ink outline, offset 3px. Transition 150ms ease.
- **Hours card**: close (✕, 32px desktop / 44px mobile hit area, aria-label "Stäng") hides it and sets `sessionStorage.hoursDismissed = "1"`; nav "ÖPPETTIDER" toggles it back. Keep hours in one JS/HTML source so card and hours section stay in sync.
- **Mobile menu**: ☰ / ✕ toggle with `aria-expanded` and `aria-controls`; full-screen ink overlay below header; links Young Serif 32px with `--line-dark` dividers; Esc closes; lock body scroll while open.
- **Sticky booking (mobile)**: hide while footer is visible (IntersectionObserver).
- **Map**: `<iframe loading="lazy" title="Karta till Tropical un pezzo d'Italia">`.
- **Images**: `<picture>` with AVIF + WebP, `srcset` 800w/1600w, explicit width/height; hero `fetchpriority="high"`, others `loading="lazy"`.

## SEO / meta
Keep the live site's title, meta description, canonical, Open Graph and Twitter tags. `<html lang="sv">`.

## Assets
Logo and photos must come from the client (not included). Fonts: Google Fonts, self-host as woff2 with `font-display: swap`.
