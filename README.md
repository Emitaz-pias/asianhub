# Asian Hub Community

An English-language sports, games, match-analysis, and prediction-culture community website for people in all countries except Bangladesh. Discussion may include betting as a topic. The website does not provide betting or gambling services, accept wagers, handle accounts or payments, recruit agents or affiliates, or promise income.

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

The contact form collects email, message, and required consent and is prepared for Netlify Forms. Before accepting submissions, enable Netlify Forms detection in the site dashboard, deploy, and verify the `community-contact` form is detected. Review dashboard access, notifications, spam filtering, and manual deletion. No SheetDB, Google Sheets, Google Analytics, or Google Ads tag is included.

No age requirement is stated on the site because none has been supplied. Confirm the intended age policy and applicable country requirements before launch. The legal/business identity of the community operators has also not been supplied; the site identifies Asian Hub as a community name and does not invent a legal entity. Contact is through the form.

Before launch, verify the actual Netlify form behavior, submission storage and deletion, desktop and mobile layouts, all routes and footer links, and the deployed HTTPS domain. Send a controlled test submission only after the form has been detected, then verify and delete that test record.
