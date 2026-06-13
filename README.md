# KUTNITI — AI-Powered Strategic Media Website Prototype

This is a complete static front-end prototype for **KUTNITI.com**. It is designed to run directly in VS Code using Live Server or any static server.

## What is included

- Responsive homepage
- Article page
- Category/listing page with filters
- About page
- Editorial policy and correction policy page
- Author page
- Contact/advertising form page
- Privacy and terms pages
- 404 page
- AI assistant simulation on the front end
- Search overlay
- Dark mode
- Newsletter form simulation
- SEO metadata and `NewsArticle` schema example
- `robots.txt`, `sitemap.xml`, and `manifest.webmanifest`
- Security header configs for Netlify, Vercel and Nginx
- SEO and security checklists

## How to run in VS Code

### Option 1: Live Server extension

1. Unzip the project.
2. Open the folder in VS Code.
3. Install the VS Code extension: **Live Server**.
4. Right-click `index.html`.
5. Click **Open with Live Server**.

### Option 2: Python static server

```bash
cd kutniti_ai_media_website
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Production notes

This is a static prototype. For production, connect:

- CMS: WordPress Headless, Strapi, Payload CMS, Directus or Sanity
- Backend: Node.js/NestJS, Laravel or Django
- AI: RAG backend using verified KUTNITI content and official documents
- Search: Meilisearch, Typesense or Algolia
- Newsletter: Mailchimp, Brevo, ConvertKit or custom CRM
- Analytics: Plausible, Matomo or GA4
- Hosting: Vercel, Netlify, Cloudflare Pages or Nginx VPS

## Important replacements before launch

- Replace demo email addresses.
- Replace SVG placeholder images with real editorial images and charts.
- Replace demo article content with real articles.
- Update sitemap URLs after final routing.
- Add real author profiles and editorial ownership details.
- Review privacy and terms pages legally.
