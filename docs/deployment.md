# Vercel deployment

Import the separate Git repository into Vercel and select the Astro framework. The committed configuration uses pnpm install --frozen-lockfile, pnpm build and dist. Use Node 24 and the pinned pnpm version. Static output requires no Vercel adapter and no backend credentials.

Set PUBLIC_SITE_URL to the final HTTPS domain to enable canonical/absolute metadata URLs. Keep preview domains out of that production value. Review a Vercel preview, then publish production when the owner requests it. This task prepares the repository; it does not deploy publicly or change the Chrome extension's release.

GitHub Actions validates lint/types, tests and the static build. Vercel can build preview deployments from pull requests and production from main after the project is connected.


## Import settings

- Repository: RodrigoVieira06/wpp-discreto-site (public).
- Production branch: main.
- Framework preset: Astro.
- Root directory: ./ (repository root).
- Node.js version: 24.x.
- Install command: pnpm install --frozen-lockfile.
- Build command: pnpm build.
- Output directory: dist.
- Environment variable before first deployment: ENABLE_EXPERIMENTAL_COREPACK=1, so Vercel honors the packageManager version in package.json. See https://vercel.com/docs/package-managers and https://vercel.com/docs/builds/configure-a-build.
- Production metadata: PUBLIC_SITE_URL must be the actual HTTPS production origin. If it is unknown at the initial import, set it after Vercel assigns the domain and redeploy. Do not invent a production hostname.

No API keys, database or extension publishing credentials are required for this static website. GitHub Actions checks the source; the owner connects and deploys the repository through Vercel.
