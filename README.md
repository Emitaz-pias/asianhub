# Asian Hub Community

An English-language sports and games community information website for people in all countries except Bangladesh, focused on teams, competitions, and match analysis.

Asian Hub is a community name. This site does not claim that a registered company or licensed operator exists. The website currently provides information and a contact/interest form; it does not host a live forum, chat, or events.

## Local development

```bash
npm install
npm run dev
```

## Build and deploy

```bash
npm run build
```

Netlify is configured by `netlify.toml` to publish `dist/`. The static page and its React content are the same for visitors and crawlers. There are no user-agent-specific pages or redirects. `robots.txt` permits Google AdsBot crawling and `sitemap.xml` lists the public information pages.

The contact form sends `email`, `message`, `consent`, and `submittedAt` to the SheetDB API configured in `src/main.jsx`. Set the connected sheet's first row to four separate column headers: `email`, `message`, `consent`, `submittedAt`. In the SheetDB dashboard, allow only Create (POST) for this public form endpoint; enable read/search only if there is a separate, justified need. Google Ads tag `AW-18529286301` loads only after a visitor explicitly allows advertising measurement; rejecting does not load the tag. The form content is not sent to Google Ads. A conversion event is not configured because no conversion action label/snippet has been provided.

No age requirement is stated on the site because none has been supplied. Confirm the intended age policy and applicable country requirements before launch. The legal/business identity of the community operators has also not been supplied; the site identifies Asian Hub as a community name and does not invent a legal entity. Contact is through the form.

Before launch, verify the SheetDB column headers and Create (POST) permission, then submit a controlled test and verify/delete that row. Also verify submission storage and deletion, desktop and mobile layouts, all routes and footer links, and the deployed HTTPS domain.
