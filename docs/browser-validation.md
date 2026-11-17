# Browser validation

Validation date: 2026-11-13. The static Astro build was served over local HTTP and opened in headless Chromium using the requested design skill's browser scripts. Screenshots use fictional conversations and the approved product artwork.

## Behavior

The browser assertion run passed theme switching, local preference persistence, system appearance, both demo range controls, blur switches, alias application/removal, mobile menu opening/closing, skip-link focus, image loading and horizontal overflow at 390 px. The report is `.local/browser-qa-top.png`. This exercises DOM events; it does not substitute for a manual screen-reader audit or actual desktop keyboard input.

Jest covers appearance preference validation, system versus explicit selection, and the 20–100% range. Biome and Astro diagnostics passed without errors or warnings.

## Visual corrections

- Constrained the product frame and its conversation to avoid overflow into following copy.
- Restored mobile demonstration controls and made its range/button targets at least 44 px tall.
- Reduced excessive footer whitespace on mobile.
- Replaced the beige hero frame with the product's green surface.
- Increased light-theme supporting-text contrast.
- Stacked theme examples at tablet widths to improve use of the screen.

Screenshots and reports are local review artifacts, not production routes. The temporary browser-check route is removed by the production rebuild.

## Scope

This is a Chromium check, not a claim of validation on Safari, Firefox or every assistive technology. Production canonical/share origins still require PUBLIC_SITE_URL. Confirm the extension's store release includes advertised features before publishing the website.

The performance run measured roughly 380–400 KiB transferred and zero layout shift in local Chromium. Its initial blocking finding concerned repeated small icons below the fold; those now use lazy loading. Font transfer is about 189 KiB and remains an optimization warning. Timings from a local headless browser do not represent real visitor network conditions.

## Design record

The software page uses the existing charcoal/mint brand, Onest, a centered hero, native conversation blur and one supplied word-highlight moment. The copy voice is direct Brazilian Portuguese, without invented testimonials or installation numbers. The copy linter's rhythm warning is retained because short factual instructions fit the interface; no filler was added to alter sentence statistics.

The page uses approved extension artwork, actual extension captures and fictional conversations. No stock customer photographs, assumed business facts, forms, contact placeholders or coined brand names were added. PUBLIC_SITE_URL remains unset until the owner chooses a production domain.


## Final automated design status

GATE: OPEN 3 (rounds used up). The requested skill allows three gate rounds and requires stopping visual fixes after that limit. The full final output is in docs/design/gate-report.txt. This is not a clean automated design pass.

Open findings, reviewed against the real screenshots:

1. container-edges: the text in the Automatic theme radio label is inset from the page edge. This is the radio control's internal padding, not page overflow.
2. stagger: incoming and outgoing fictional chat bubbles have different horizontal positions on mobile. They deliberately follow chat alignment.
3. menu-toggle: the checker mistakes the newly visible theme button for the mobile menu button and requests aria-expanded. The actual menu button has aria-expanded and its opening/closing behavior passed the browser test; the theme button has an action label and changes appearance.

Five explicit waivers are recorded in .taste-skill/waivers.json: two custom HTML demonstrations were not recognized as visuals; Portuguese feature headings were not recognized by the noun heuristic; the word-highlight paragraph was mistaken for a second section heading; the final headline fits in two lines while the synthetic replacement text does not. No checker or supplied kit source was modified.


The final layout check found no findings at 1024, 820, 768 and 390 px after the tablet layout change. At 1440 px its remaining finding is the synthetic hero-headline stress test, covered by the final-copy waiver. Mobile reduced-motion and desktop dark-theme captures were inspected visually. The visible mobile theme button has a 44 px target.


Final performance result: 0 FAIL and 5 WARN across desktop/mobile. Transfer was 414 KiB desktop and 379 KiB mobile, with zero measured layout shift and no broken requests. Remaining warnings concern the font size, one repeated icon classified below the fold, and the mobile theme captures' source-to-display resolution. These are recorded optimizations, not a claimed all-green performance report.

## Owner-requested layout refinement

The owner rejected viewport-sized gaps and the initial sparse chat mock. Content sections now use natural heights, including the kit's higher-specificity mobile rules. Copy roles are 18 px desktop / 16 px mobile, separate from bounded UI metadata and display headings. The description of extension themes no longer includes a website theme selector. The website retains its header toggle with a circular View Transition and reduced-motion fallback. Scroll updates a header progress line and aria-current navigation. The richer fictional chat uses Família Vieira, sidebar filters/search and familiar WhatsApp panel/bubble colors. The previous gate report describes the superseded full-screen layout and is historical, not validation of these changes.

The current Impeccable detector returned no findings. Biome, Astro diagnostics, four Jest tests and the production build passed. Updated desktop dark and mobile light renders are in .local/refined-desktop.png and .local/refined-mobile.png.

Browser assertions on the refined build passed animated theme switching, removal of the inline website theme selector, Família Vieira naming, active-section navigation, scroll progress, natural section sizing and no horizontal overflow at 390 px. The verification script was corrected to read contact labels rather than matching its own inline script text. The temporary verification route was removed. The static preview remains available on port 4321.


## Capture carousel, 2026-11-16

Regenerated five product captures from the store HTML and real popup runtime in Firefox, with the owner's fictional contact names. Chrome's local capture runner stalled; it was stopped and Firefox was used to complete the capture and browser checks. Browser assertions passed image loading, explicit pause (aria-pressed=true and computed animation-play-state=paused), resume, removal of the hero fact, and no horizontal overflow at 1440 px and the Firefox minimum window width of 500 px. Desktop and narrow screenshots are .local/carousel-desktop.png and .local/carousel-mobile.png. This round does not claim a fresh 390 px browser run. Reduced-motion behavior is implemented in CSS. The static preview on port 4321 serves the updated build.


## Ambient motion, 2026-11-17

Firefox browser assertions confirmed a decorative aria-hidden background with pointer-events:none, no desktop horizontal overflow, a bounded scroll shift (-7.55 px at the tested position), section divider focus updates, and the pause control setting aria-pressed=true and animation-play-state=paused. Light and dark screenshots were captured in .local/ambient-light.png and .local/ambient-dark.png. Reduced-motion alternatives are present in CSS; this run does not claim a system-level reduced-motion browser test or measured frame-rate results. Biome, Astro diagnostics, Jest and build are run for this change.
