# Asian Hub landing page

Responsive React + Vite landing page with games and sports information, E-Wallet Agent details, FAQ, and an application form UI.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
The production build is created in `dist/`.

## Deploy
- **Netlify:** `netlify.toml` sets build command `npm run build` and publish directory `dist`.
- **Vercel:** Framework preset Vite, build command `npm run build`, output directory `dist`.
- **Static hosting/VPS:** Upload the contents of `dist/` to your web root.

## Before launch
1. Review applicable local rules before publishing games or sports information.
2. Form submissions are sent through SheetDB to the connected Google Sheet. Restrict the API to Create (POST), set the allowed CORS origin to `https://asianretailhub.com`, and keep the Sheet private. The public frontend exposes the API URL, so CORS alone does not block direct API calls.
3. Review the Terms and Privacy pages against the actual data handling, retention period, contact process, and laws relevant to the site's audience.
4. Review any third-party names, images, or content before publishing them.

## Domain
The site owner selected `asianretailhub.com`. Configure the custom domain and DNS records in Netlify before expecting that address to serve the site.
# asianhub
