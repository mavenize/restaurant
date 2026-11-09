# Tropical un pezzo d'Italia: home page

The home page for Tropical un pezzo d'Italia, an Italian restaurant at Kungsträdgårdsgatan 12 in Stockholm. The page is in Swedish, is rendered entirely from JavaScript, and is bundled with Webpack.

Preview: <https://mavenize.github.io/restaurant/>

## Getting started

```sh
npm install
npx webpack serve   # dev server at http://localhost:8080
npm run build       # production build in dist/
```

## Project layout

```
src/
  index.js          imports global CSS and appends each section to #content
  template.html     the <head> and an empty <div id="content">
  data/content.js   all copy, hours, the address and URLs
  data/photos.js    responsive image sources
  utils/dom.js      the createEl helper
  components/       button, logo, photo, hours table
  sections/         one .js and .css pair per page section
  styles/           design tokens, fonts, base styles
  assets/           logos, favicons, fonts, photos
design_handoff_home_page/   the design reference and spec
```

## How it is built

- All page content is created with `document.createElement`, through the `createEl` helper. `innerHTML` is not used.
- The `<head>` tags stay in `template.html`, because social media scrapers do not run JavaScript.
- There is one DOM for all screen widths, adapted with CSS. The breakpoints are 767px and below, 768 to 1023px, and 1024px and up.
- Colours are defined only in `src/styles/tokens.css`.
- Copy lives only in `src/data/content.js`, and stays word for word as in the design.

`CLAUDE.md` has the full working rules, and `plan.md` has the project plan and task list.

## Deploying

The site is served by GitHub Pages from the `gh-pages` branch, which holds only the contents of `dist/`. `dist/` is git-ignored, so new build files have to be force-added:

```sh
npm run build
git add dist -f
git commit -m "Deployment commit"
git push origin main
git subtree push --prefix dist origin gh-pages
```

## Images and icons

| Asset | Source |
|---|---|
| Hero photo | Supplied by the project owner |
| Restaurant photo, favicons, logo | The restaurant's own site, tropicalunpezzo.se |
| Pasta photo | ["The temptress"](https://commons.wikimedia.org/wiki/File:The_temptress_(Unsplash).jpg) by Izzy Boscawen, CC0, via Wikimedia Commons |
| `logo-light.svg` | A provisional recolour of `logo.svg` for the dark footer, to be replaced if the restaurant has an official version |

Photos are served as AVIF and WebP at two widths each.
