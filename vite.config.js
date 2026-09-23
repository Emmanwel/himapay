import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Each page is its own HTML file, so it works on any static host without
// rewrite rules and has its own title and description for search engines.
const pages = {
  home: "index.html",
  merchants: "merchants/index.html",
  products: "products/index.html",
  developers: "developers/index.html",
  about: "about/index.html",
  contact: "contact/index.html",
  notFound: "404.html",
};

// Head tags every page shares, so each HTML file only carries its own title,
// description and URL.
function sharedHead(siteUrl) {
  const meta = (attrs) => ({ tag: "meta", attrs, injectTo: "head" });
  const link = (attrs) => ({ tag: "link", attrs, injectTo: "head" });
  return {
    name: "himapay-shared-head",
    transformIndexHtml: () => [
      meta({ name: "theme-color", content: "#4cc1ef" }),
      link({ rel: "icon", href: "/favicon.ico", sizes: "32x32" }),
      link({ rel: "apple-touch-icon", href: "/apple-touch-icon.png" }),
      meta({ property: "og:type", content: "website" }),
      meta({ property: "og:site_name", content: "HimaPay" }),
      meta({ property: "og:image", content: `${siteUrl}/og-image.png` }),
      meta({ property: "og:image:width", content: "1200" }),
      meta({ property: "og:image:height", content: "630" }),
      meta({ name: "twitter:card", content: "summary_large_image" }),
      meta({ name: "twitter:site", content: "@HimaPay" }),
    ],
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_SITE_URL } = loadEnv(mode, process.cwd());
  return {
    appType: "mpa",
    plugins: [react(), tailwindcss(), sharedHead(VITE_SITE_URL)],
    build: {
      rolldownOptions: {
        input: Object.fromEntries(
          Object.entries(pages).map(([name, file]) => [
            name,
            resolve(import.meta.dirname, file),
          ]),
        ),
      },
    },
  };
});
