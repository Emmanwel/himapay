# HimaPay website

Marketing site for HimaPay: payments that separate a merchant's revenue for
restocking, loan repayment and profit right at the point of sale.

Built with React 19, Vite 8 and Tailwind CSS 4.

## Getting started

Requires Node.js 20.19 or newer.

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build locally
```

## Pages

| URL            | What's on it                                           |
| -------------- | ------------------------------------------------------ |
| `/`            | Landing page                                           |
| `/merchants/`  | For merchants, with the interactive split calculator   |
| `/products/`   | All six products, each with an illustrated walkthrough |
| `/developers/` | MIZIZI API overview and API access request             |
| `/about/`      | Company story, values and who HimaPay serves           |
| `/contact/`    | Contact form, phone, email and FAQs                    |
| `404.html`     | Branded "page not found" page                          |

The site is a multi-page build: every page is its own HTML file, so it works
on any static host (Netlify, Vercel, Cloudflare Pages, cPanel/Apache) with no
rewrite rules. `public/.htaccess` points Apache at the custom 404 page; other
hosts use `404.html` automatically.

### Adding a page

1. Create `new-page/index.html` (copy an existing one and change the title,
   description, URLs and script entry).
2. Add `src/entries/new-page.jsx` that mounts your page component.
3. Build the page in `src/pages/`, wrapped in `<Layout>`.
4. Register the HTML file in the `pages` map in `vite.config.js`, and add it
   to `navLinks` in `src/constants/index.js` if it belongs in the menu.

## Editing content

- **Copy, services, products, FAQs, contact details and social links** live
  in `src/constants/index.js`.
- **Merchant dashboard and app store URLs** are in the `links` object in the
  same file. While a URL is empty, the merchant button goes to the contact
  page and the store badges read "Coming soon".
- **Production URL** (used for canonical and social-sharing tags) is
  `VITE_SITE_URL` in `.env`.
- **Brand colours** are Tailwind theme tokens at the top of `src/index.css`,
  under their original names: `pink-ish` (#EB77B9), `blue-teal` (#4CC1EF),
  `slate-gray`, `pale-blue` and `primary`.
- The contact and newsletter forms open the visitor's email app addressed to
  the HimaPay inbox. Swap in a form service (for example Formspree or Brevo)
  when one is set up.

## Quality checks

```bash
npm run lint           # ESLint
npm run format         # Prettier (also sorts Tailwind classes)
npm run format:check
```

## Project structure

```
index.html, */index.html, 404.html   one HTML file per page
src/
  entries/      tiny scripts that mount each page
  pages/        page components
  sections/     home page sections
  components/   shared UI (Layout, Nav, Footer, calculator, forms, ...)
  constants/    all site content and links
  hooks/        shared React hooks
public/         favicon, touch icon, social image, .htaccess
```
