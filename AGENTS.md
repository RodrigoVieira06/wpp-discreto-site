# Project context

Read README.md, docs/architecture.md and docs/design/plan.md before editing. This repository owns the Wpp Discreto marketing website, independently of the Chrome extension.

- Use pnpm, Astro static output, TypeScript and SCSS. Keep browser JavaScript limited to themes and product demonstrations. Add a framework dependency only for a concrete need.
- Code, identifiers and development documentation are English. Product copy is Brazilian Portuguese and follows the stop-slop guidelines: factual, direct, no slogans or invented usage metrics.
- Preserve the approved logo. Actual screenshots and fictional demo conversations must not be presented as customer proof. Never read a visitor's WhatsApp data.
- Support system/light/dark themes, keyboard navigation, visible focus and reduced motion. Never block content on animation or storage access.
- The supplied design-taste-frontend assets are vendored unchanged. Follow their motion/layout system; do not edit the kit to bypass checks. Keep the five planned page sections and shared content edges.
- Theme and demo logic use TDD with Jest. Run pnpm check, pnpm test and pnpm build. Use Conventional Commits with Lefthook; do not bypass hooks.
- Vercel serves dist as a static site. No backend, analytics, SSR adapter or external font request is required. Configure PUBLIC_SITE_URL with the final domain before production publication.
- The owner first requested visual approval before landing-page code. A reference was presented, and the owner then requested a browser-tested page. Keep docs/design/reference.png as the review reference; further changes should follow their feedback.
