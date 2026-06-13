# KUTNITI Security Checklist

## Must do before production

- Force HTTPS and redirect HTTP to HTTPS.
- Enable HSTS after confirming HTTPS works on all subdomains.
- Keep the Content Security Policy strict; avoid random third-party scripts.
- Use MFA for admin, editor and author accounts.
- Use role-based access control: admin, editor, author, contributor, moderator.
- Rate-limit login, newsletter, contact and comment endpoints.
- Add CSRF protection for all write actions.
- Validate and scan all uploaded images/files.
- Store secrets in environment variables, never in Git.
- Enable automated daily backups and monthly restore tests.
- Add WAF/bot protection through Cloudflare or equivalent.
- Keep dependency scanning and security patching active.

## AI-specific controls

- Use citation-backed retrieval for AI answers.
- Keep logs of source documents used by AI.
- Add AI-use disclosure on article pages.
- Never allow AI to publish directly without human editorial review.
