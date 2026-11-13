# Wpp Discreto website

Static Brazilian Portuguese landing page for the Wpp Discreto Chrome extension. This project is separate from the extension repository.

## Development

Use Node 24 (minimum 22.23.4) and pnpm 11.23.0. Install pnpm through a current Corepack release or its official installation method.

```sh
pnpm install --frozen-lockfile
make dev
```

The development server listens on 127.0.0.1:4321. Over SSH, forward that port to your desktop. Use make verify for Biome, Astro/TypeScript, Jest and a production build. make preview serves the static build. The Makefile also accepts PNPM=/path/to/pnpm.

## Stack

Astro, TypeScript and SCSS, with small native controls for themes and product demos. The public site does not need React, an SSR adapter, analytics or a backend. The optional shadcn suggestion was evaluated; the current page does not require a React component library. Visual tokens and unmodified interaction/layout assets come from the explicitly requested design-taste-frontend skill. Copy follows stop-slop.

Themes follow the system by default and support local overrides. Product demos contain fictional messages and do not access WhatsApp. Onest is self-hosted with its OFL license. Chrome branding comes from Google's official Chrome assets; extension artwork and UI come from the owner's existing project.

See docs/architecture.md, docs/design/plan.md and docs/deployment.md. The generated design reference is in docs/design/reference.png. Browser screenshots/checker reports live in .local/ and are not production assets. No production deploy is performed automatically by a local command.

## Browser review

See docs/browser-validation.md for the browser scope, visual corrections and remaining automated design findings. Development guidance is in docs/skills/site-development/SKILL.md. Keep screenshots and temporary browser routes out of production releases.
