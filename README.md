# KUTNITI

KUTNITI is now structured as a Next.js editorial frontend. The design is component-driven and ready to connect with a Strapi CMS for articles, categories, media embeds, authors and policy pages.

## Stack

- Next.js 16
- React 19
- Plain CSS global design system
- Static content data layer in `lib/content.js`
- Integration-ready layout for YouTube, podcasts, short videos, explainers and AI briefs

## Development

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Project Structure

```text
app/
  page.jsx
  category/page.jsx
  article/page.jsx
components/
  Header.jsx
  Footer.jsx
  ArticleGrid.jsx
  AIBrief.jsx
  Multimedia.jsx
lib/
  content.js
public/
  assets/
```

## Strapi Integration Path

Replace the arrays in `lib/content.js` with Strapi API calls. Suggested Strapi collections:

- Articles
- Categories
- Authors
- Videos
- Podcasts
- Shorts
- Explainers
- Site settings

## Deployment

Use Vercel, Netlify or a Node server for the Next.js version. GitHub Pages is fine for plain static HTML, but it is not the best target for a Strapi-backed Next.js frontend.
