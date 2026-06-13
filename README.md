# KUTNITI

KUTNITI is a static editorial website for strategic analysis on Nepal, South Asia, public policy, economics, technology governance and geopolitics. The codebase is structured for fast static hosting, clear editorial navigation and search-friendly publishing.

## Project Scope

- Responsive homepage with editorial sections and topic pillars
- Article, category, author, about, contact and policy pages
- Search overlay and client-side interaction layer
- Newsletter and contact form interfaces
- Dark mode support
- SEO metadata, sitemap, robots file and web app manifest
- Security header configurations for Netlify, Vercel and Nginx
- Editorial, privacy, terms, corrections and funding transparency pages

## Directory Structure

```text
.
|-- assets/
|   |-- css/
|   |-- img/
|   `-- js/
|-- docs/
|-- index.html
|-- article.html
|-- category.html
|-- about.html
|-- contact.html
|-- sitemap.xml
|-- robots.txt
|-- netlify.toml
|-- vercel.json
`-- nginx-security.conf
```

## Local Development

The site is built with plain HTML, CSS and JavaScript. No build step is required.

### Option 1: VS Code Live Server

1. Open the project folder in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select `Open with Live Server`.

### Option 2: Python Static Server

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Deployment

This project can be deployed on Vercel, Netlify, Cloudflare Pages or any static web server. Security header examples are included for common hosting environments.

## Production Integration Notes

- Connect article publishing to a CMS such as WordPress Headless, Strapi, Payload CMS, Directus or Sanity.
- Connect forms to a verified backend endpoint or a trusted form provider.
- Use a search service such as Meilisearch, Typesense or Algolia for large content archives.
- Integrate analytics through Plausible, Matomo or GA4.
- Keep author details, ownership information, correction notices and publication dates accurate.
- Review privacy, terms and advertising policies before public launch.

## Editorial Standards

KUTNITI is designed around source-aware analysis, transparent corrections, named authorship and clear separation between editorial work, opinion, advertising and sponsored content.
