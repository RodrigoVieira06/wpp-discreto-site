import { parseTheme, resolveTheme, type Theme } from '../lib/appearance';
import { scrollMotion } from '../lib/motion';
import { activeSection } from '../lib/navigation';

const system = matchMedia('(prefers-color-scheme: dark)');
let preference: Theme = 'auto';
try {
  preference = parseTheme(localStorage.getItem('wpp-site-theme'));
} catch {
  /* Preferences remain usable when storage is unavailable. */
}
function applyTheme() {
  const theme = resolveTheme(preference, system.matches);
  document.documentElement.dataset.grade = theme === 'dark' ? 'evening' : 'day';
  document
    .querySelector('[data-theme-toggle]')
    ?.setAttribute(
      'aria-label',
      theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro',
    );
  for (const radio of document.querySelectorAll<HTMLInputElement>(
    'input[name="theme"]',
  ))
    radio.checked = radio.value === preference;
}
function saveTheme(value: Theme) {
  preference = value;
  try {
    localStorage.setItem('wpp-site-theme', value);
  } catch {
    /* No backend or fallback tracking. */
  }
  applyTheme();
}
let changingTheme = false;
document
  .querySelector<HTMLButtonElement>('[data-theme-toggle]')
  ?.addEventListener('click', async (event) => {
    if (changingTheme) return;
    const button = event.currentTarget as HTMLButtonElement;
    const box = button.getBoundingClientRect();
    document.documentElement.style.setProperty(
      '--theme-x',
      `${box.left + box.width / 2}px`,
    );
    document.documentElement.style.setProperty(
      '--theme-y',
      `${box.top + box.height / 2}px`,
    );
    const update = () =>
      saveTheme(
        document.documentElement.dataset.grade === 'evening' ? 'light' : 'dark',
      );
    if (
      !document.startViewTransition ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      update();
      return;
    }
    changingTheme = true;
    try {
      await document.startViewTransition(update).finished;
    } finally {
      changingTheme = false;
    }
  });
system.addEventListener('change', () => {
  if (preference === 'auto') applyTheme();
});
applyTheme();
const sectionLinks = [
  ...document.querySelectorAll<HTMLAnchorElement>('.nav__link[href^="#"]'),
];
const sections = sectionLinks
  .map((link) => document.querySelector<HTMLElement>(link.hash))
  .filter((section): section is HTMLElement => Boolean(section));
let scrollPending = false;
function updateNavigation() {
  scrollPending = false;
  const current = activeSection(
    sections.map((section) => ({
      id: section.id,
      top: section.getBoundingClientRect().top,
    })),
    Math.min(innerHeight * 0.35, 220),
  );
  for (const link of sectionLinks) {
    if (link.hash === `#${current}`)
      link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
  const distance = document.documentElement.scrollHeight - innerHeight;
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty(
      '--ambient-shift',
      `${scrollMotion(scrollY, distance) * -36}px`,
    );
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      const focus = Math.max(
        0,
        1 - Math.abs(box.top - innerHeight * 0.3) / innerHeight,
      );
      section.style.setProperty('--section-focus', String(focus));
    }
  }
  document.documentElement.style.setProperty(
    '--reading-progress',
    String(scrollMotion(scrollY, distance)),
  );
}
function scheduleNavigation() {
  if (!scrollPending) {
    scrollPending = true;
    requestAnimationFrame(updateNavigation);
  }
}
addEventListener('scroll', scheduleNavigation, { passive: true });
addEventListener('resize', scheduleNavigation);
updateNavigation();

document.addEventListener('visibilitychange', () =>
  document.documentElement.classList.toggle(
    'page-backgrounded',
    document.hidden,
  ),
);
