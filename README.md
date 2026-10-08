# POD Store (Next.js)

Print-on-demand store homepage built with the Next.js App Router.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Where to edit

- `app/page.js` — all page content. Replace the `[BRACKETED]` placeholders (brand, headline, prices, links). Product names, categories and steps are the arrays at the top.
- `app/globals.css` — styles. Colors and fonts are CSS variables at the top (`--accent` is the main brand color).
- `app/layout.js` — page title, description and the Google Fonts link.

## Not wired up yet

- The cart button, "Add to cart" links and newsletter form are static. Connect them to your store backend or e-commerce provider.
- Product photos and the hero image are placeholder blocks. Put images in `public/` and use `next/image`.
