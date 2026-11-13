# Vercel deployment

Import the separate Git repository into Vercel and select the Astro framework. The committed configuration uses pnpm install --frozen-lockfile, pnpm build and dist. Use Node 24 and the pinned pnpm version. Static output requires no Vercel adapter and no backend credentials.

Set PUBLIC_SITE_URL to the final HTTPS domain to enable canonical/absolute metadata URLs. Keep preview domains out of that production value. Review a Vercel preview, then publish production when the owner requests it. This task prepares the repository; it does not deploy publicly or change the Chrome extension's release.

GitHub Actions validates lint/types, tests and the static build. Vercel can build preview deployments from pull requests and production from main after the project is connected.
