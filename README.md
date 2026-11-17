# Wpp Discreto website

<img src="public/brand/icon-128.png" width="80" height="80" alt="Wpp Discreto logo" />

Static Brazilian Portuguese landing page for the Wpp Discreto Chrome extension. This project is separate from the extension repository.

## Development

Use Node 24 (minimum 22.23.4) and pnpm 11.23.0. Install pnpm through a current Corepack release or its official installation method.

```sh
pnpm install --frozen-lockfile
make dev
```

The development server listens on 127.0.0.1:4321. Over SSH, forward that port to your desktop. Use make verify for Biome, Astro/TypeScript, Jest and a production build. make preview serves the static build. The Makefile also accepts PNPM=/path/to/pnpm.

## Stack

Astro, TypeScript and SCSS, with native theme controls, scroll feedback and an animated product-capture carousel. The public site does not need React, an SSR adapter, analytics or a backend. Visual tokens and unmodified interaction/layout assets come from the explicitly requested design-taste-frontend skill. Copy follows stop-slop.

Themes follow the system by default and support local overrides. Product captures show the extension popup with fictional conversations and do not access visitors’ WhatsApp data. Onest is self-hosted with its OFL license. Chrome branding comes from Google's official Chrome assets; extension artwork and UI come from the owner's existing project.

See docs/architecture.md, docs/design/plan.md and docs/deployment.md. The generated design reference is in docs/design/reference.png. Browser screenshots/checker reports live in .local/ and are not production assets. No production deploy is performed automatically by a local command.

## Browser review

See docs/browser-validation.md for the browser scope, visual corrections and remaining automated design findings. Development guidance is in docs/skills/site-development/SKILL.md. Keep screenshots and temporary browser routes out of production releases.


## Deploy to Vercel

Import this repository, keep the root directory as `./`, select Astro and Node 24, and add `ENABLE_EXPERIMENTAL_COREPACK=1` before the first deploy. The committed `vercel.json` sets the frozen pnpm install, build command and `dist` output. Set `PUBLIC_SITE_URL` to the actual production HTTPS origin once the domain is selected. See [deployment instructions](docs/deployment.md).

[Chrome extension](https://chromewebstore.google.com/detail/okfikehehjcjkmfbggdlealmdmiomchn) · [Extension source](https://github.com/RodrigoVieira06/wpp-discreto)

Developed by Rodrigo Lima. Independent project, not affiliated with WhatsApp or Meta.
