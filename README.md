# Quora Smart Home — Static Site

React + Vite homepage for the Quora smart home template. Built for static deployment on MochaHost.

## Development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Upload the contents of the `dist/` folder to your MochaHost public directory (e.g. `public_html`).

## MochaHost deployment

1. Run `npm run build` locally
2. Upload everything inside `dist/` via FTP or File Manager:
   - `index.html`
   - `assets/` folder
3. Ensure `index.html` is in the web root
4. Optional: add `.htaccess` in the root if you later add client-side routing:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## Replacing placeholder images

Swap `PlaceholderImage` components with real `<img>` tags pointing to your assets in `public/images/`.

## Stack

- React 18 (JavaScript)
- Vite 6
- Tailwind CSS 3
- Framer Motion 11
# feiraautomatica
