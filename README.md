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
- **Netlify:** Build command `npm run build`, publish directory `dist`.
- **Vercel:** Framework preset Vite, build command `npm run build`, output directory `dist`.
- **Static hosting/VPS:** Upload the contents of `dist/` to your web root.

## Before launch
1. Review applicable local rules before publishing games or sports information.
2. Replace the placeholder support email and Telegram URL in `src/main.jsx`.
3. The form is intentionally in preview mode. To receive submissions, configure a secure form endpoint in `config.formEndpoint` and ensure your privacy notice describes collection, use, retention, and contact details. Do not collect passwords, OTPs, PINs, or payment credentials.
4. Replace placeholder policy pages with reviewed, jurisdiction-appropriate Terms and Privacy Policy.
5. Review any third-party names, images, or content before publishing them.

## Domain
Domain availability for `asianhub.com` has not been confirmed. Check with a registrar before purchasing. A domain being available does not establish trademark rights.
# asianhub
