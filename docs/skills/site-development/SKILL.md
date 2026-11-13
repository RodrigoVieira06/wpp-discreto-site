# Website development

Read AGENTS.md, README.md and docs/design/plan.md first. Keep the website independent of the extension.

Use pnpm and the Makefile. Start with make install, run make dev, and finish with make verify. A static production preview is make preview. Changes to theme normalization or demo range rules begin with a failing Jest test. Run Biome and Astro diagnostics before committing. Lefthook checks commits and Conventional Commit messages.

For a visual change, rebuild and inspect the actual page in a browser at desktop, tablet and mobile widths. Check both themes, reduced motion, readable copy, keyboard focus, navigation and demo controls. Keep fictional messages isolated from WhatsApp and never introduce invented reviews or usage metrics. Use the explicitly requested design-taste-frontend and stop-slop skills for their respective work.

Vercel builds with pnpm build and serves dist. Set PUBLIC_SITE_URL to the real production origin. See docs/deployment.md. A local build does not authorize production deployment.
