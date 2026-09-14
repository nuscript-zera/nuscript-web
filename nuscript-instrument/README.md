# nuscript.net — swap DM Sans → Instrument Sans

Body/UI font changes from **DM Sans** to **Instrument Sans**. Fraunces stays for
headings; the palette and everything else are untouched. Same self-hosted
`@font-face` pattern you already use — no next/font, no new dependency.

## 1. Add the font files
Copy both into `public/fonts/` (next to your existing Fraunces / DM Sans files):
```
public/fonts/InstrumentSans-Roman.woff2
public/fonts/InstrumentSans-Italic.woff2
```
(Variable, latin, weights 400–700 — Instrument Sans's full range.)

## 2. globals.css — replace the two DM Sans @font-face blocks

**Remove** these two blocks:
```css
@font-face {
  font-family: "DM Sans";
  src: url("/fonts/DMSans-Roman.woff2") format("woff2");
  font-weight: 100 1000;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "DM Sans";
  src: url("/fonts/DMSans-Italic.woff2") format("woff2");
  font-weight: 100 1000;
  font-style: italic;
  font-display: swap;
}
```
**Replace with:**
```css
@font-face {
  font-family: "Instrument Sans";
  src: url("/fonts/InstrumentSans-Roman.woff2") format("woff2");
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Instrument Sans";
  src: url("/fonts/InstrumentSans-Italic.woff2") format("woff2");
  font-weight: 400 700;
  font-style: italic;
  font-display: swap;
}
```

## 3. globals.css — point the tokens at Instrument Sans

In `:root`, change these two lines:
```css
  --font-sans: "DM Sans", ui-sans-serif, system-ui, sans-serif;
  --font-ui: "DM Sans", ui-sans-serif, system-ui, sans-serif;
```
to:
```css
  --font-sans: "Instrument Sans", ui-sans-serif, system-ui, sans-serif;
  --font-ui: "Instrument Sans", ui-sans-serif, system-ui, sans-serif;
```
(Nothing else changes — `--font-heading` stays Fraunces. `tailwind.config.js`
already reads `var(--font-sans)`/`var(--font-ui)`, so it updates automatically.)

## 4. layout.jsx — update the preload

Change:
```jsx
<link rel="preload" href="/fonts/DMSans-Roman.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```
to:
```jsx
<link rel="preload" href="/fonts/InstrumentSans-Roman.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
```
(Also fine to refresh the stale comment above the preloads, which still mentions
Public Sans / Inter Tight; the code is what matters.)

## 5. Optional cleanup
Once it's live and confirmed, delete the now-unused
`public/fonts/DMSans-Roman.woff2` and `DMSans-Italic.woff2`.

## Note on weight range
DM Sans was declared `100 1000`; Instrument Sans's real axis is `400 700`, so if
any body element used a weight below 400 or above 700 it will clamp to the
nearest. Headings are Fraunces, so they're unaffected. If you rely on an
ultra-light or ultra-black body weight somewhere, tell me and we'll adjust.

## Verify
- `grep -c "Instrument Sans" app/globals.css` → 4 (2 @font-face family lines + `--font-sans` + `--font-ui`)
- `grep -c "DM Sans" app/globals.css` → 0
- `grep "InstrumentSans-Roman" app/layout.jsx` → the preload line is updated
- Rebuild; the deployed CSS hash changes and the body renders in Instrument Sans.
