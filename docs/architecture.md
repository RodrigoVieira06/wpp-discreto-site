# Architecture

Astro prerenders the landing page to static HTML. TypeScript handles the site appearance and isolated fictional product demonstrations; SCSS supplies the brand and visual styles on top of the provided design system. No React hydration, server, database or API is needed.

| Path | Responsibility |
| --- | --- |
| src/pages | Static routes |
| src/layouts | Document, metadata and script loading |
| src/components | Install action and interactive product frame |
| src/lib | Testable appearance rules and verified product links |
| src/scripts | DOM interaction and local appearance preference |
| src/styles | Brand tokens and page/product visuals |
| public/brand | Approved artwork |
| public/product | Product images copied/cropped from the extension's approved store assets |
| public/design-kit | Unmodified assets supplied by design-taste-frontend |
| public/fonts | Local Onest variable font and its OFL license |
| tests | Jest behavior tests |

Only the website theme is persisted locally, under wpp-site-theme. Storage errors fall back to an in-memory selection. The product demonstration mutates its own DOM and never contacts WhatsApp or saves conversation names. The download action opens the verified Chrome Web Store listing, not a fabricated installation flow.
