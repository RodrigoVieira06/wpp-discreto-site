# Website design plan

Kind: software, a Brazilian Chrome extension landing page.
Deal: centred hero; client charcoal/mint colors replace the cobalt proposal because the approved logo and extension already use green; Onest was the first dealt type pairing. Consumer round controls. Use the supplied motion/system/layout assets unchanged. The first moment pick was word-highlight (seed c4707228); a duplicate command later printed liquid-type, which is not used. Keep one low-cost statement moment in the data section.

Voice: factual product language in Brazilian Portuguese; direct instructions, exact ranges and plain limitations. No invented ratings, prices, install counts, testimonials or promises. Reviewed with stop-slop.

1. Hero, one screen: category headline, installation action and the product working on fictional WhatsApp messages. A 20–100% fact sits with the copy. One native product window, with a contained blur overlay as the functional visual effect. No WebGL scene is needed for the owner's lightweight requirement.
2. Resources, one screen: interactive chat protection and local alias demonstration. The controls update only the fictional frame. Selected-media behavior is described accurately without impersonating a real account.
3. Appearance, one screen: system/light/dark selection with real cropped extension captures. Text-size range is 14–18 px in the extension.
4. Data, one screen: the word-highlight moment explains local settings and unchanged originals, followed by the limitation that blur is visual rather than encryption or access control.
5. Closing footer, one screen on desktop/two mobile: three factual FAQs, install action, repository/support/policy links and Rodrigo Lima attribution.

Hero entrance runs once; controls answer hover/press; the statement moment is the only scroll-linked effect. Reduced motion shows readable content at rest. No photos, artificial customer proof, popups, newsletter or unrelated imagery are needed.

The reference image was generated from the supplied approved logo and current extension screenshots. It is a concept, not a runtime capture. The user then asked for browser validation, authorizing a navigable implementation based on the presented reference.

The verified store listing was version 0.1.0 on 2026-11-13. The owner is preparing 0.2.1; ensure the public listing has the advertised features before publishing the landing page. No production Vercel deployment has been requested in this task.


## Owner refinement, 2026-11-13

Use natural section heights and 72 px desktop / 40 px mobile vertical padding instead of full-screen sections. Retain Onest with a consistent 18 px explanatory copy role (16 px mobile), 28–40 px section headings and a 40–72 px hero. The appearance section describes the extension only; the website theme toggle stays in the header. The fictional WhatsApp frame uses its familiar sidebar, search, filters, chat bubbles and composer, with Família Vieira. Navigation tracks the section with aria-current and a subtle accent surface; a thin progress line responds to scrolling. Theme changes use a short circular View Transition from the toggle, with immediate fallback and reduced-motion support. Preserve vendored kit files unchanged; this user brief supersedes its section-height and motion restrictions.


## Approved capture carousel, 2026-11-16

The owner requested a moving hero carousel instead of the simplified live mock. Use the extension's store capture sources, regenerated with Família Vieira, Fulano Beltrano, Futebol de sábado and Ciclano, including matching contact initials. The carousel includes conversation protection, appearance, text size and media; the separate feature image shows alias editing. Captures use the actual popup runtime with fictional local conversation fixtures. A snapshot-only blur fallback reproduces the conversation protection in Firefox; it is not extension code. The website's standalone readable-area fact is removed.

Carousel motion is a continuous 55-second strip with edge blur, an explicit pause/resume control, offscreen/background pausing and a static horizontally scrollable reduced-motion alternative. This explicit owner request supersedes the earlier no-carousel guideline. Source kit files remain unchanged.


## Ambient motion, 2026-11-17

References: https://linear.app/ for product-led hierarchy; https://webflow.com/blog/webpage-animation for restrained motion and guided transitions; https://vercel.com/design/guidelines for purposeful motion and reduced-motion support. These are references, not evidence of a market-wide statistical trend.

Two low-opacity green radial lights live behind the content at the viewport edges. They drift slowly over 28 seconds and shift at most 36 px across the entire scroll distance. Section dividers respond to proximity; copy and screenshots never slide, fade out or become blurred by the effect. The existing requestAnimationFrame scroll batch drives the small number of style updates. No animation framework, canvas or WebGL dependency is added. A footer control pauses the background and scroll effect; hidden tabs pause continuous ambient motion. Reduced motion uses a static background and static dividers. Content remains visible if JavaScript fails. The owner's explicit request for background and scroll animation supersedes earlier kit restrictions on decorative motion; the supplied kit files are preserved.


## Motion pacing revision, 2026-11-17

The owner explicitly removed both pause controls. Remove their markup, handlers and unused styles. The owner clarified that only the background should accelerate. Keep the carousel loop at its original 55 seconds; ambient light drift takes 14 seconds per direction instead of 28. Preserve the system reduced-motion alternative and automatic background-tab pausing. This supersedes the prior control and duration decisions.


## Light-theme ambient visibility, 2026-11-17

The original 5.5% opacity made ambient motion effectively disappear on the light ground. Increase only the light-theme layers to 18% opacity, use the light-theme accent directly, and bring their centers closer to the viewport edges. Preserve 14-second background pacing, the 55-second carousel and dark-theme styling. The center remains quiet for text.
