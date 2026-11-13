import {
  normalizeVisibleArea,
  parseTheme,
  resolveTheme,
  type Theme,
} from '../lib/appearance';

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
document
  .querySelector('[data-theme-toggle]')
  ?.addEventListener('click', () =>
    saveTheme(
      document.documentElement.dataset.grade === 'evening' ? 'light' : 'dark',
    ),
  );
for (const radio of document.querySelectorAll<HTMLInputElement>(
  'input[name="theme"]',
))
  radio.addEventListener('change', () => saveTheme(parseTheme(radio.value)));
system.addEventListener('change', () => {
  if (preference === 'auto') applyTheme();
});
applyTheme();
for (const demo of document.querySelectorAll<HTMLElement>(
  '[data-product-demo]',
)) {
  const area = demo.querySelector<HTMLInputElement>('[data-demo-area]');
  area?.addEventListener('input', () => {
    const value = normalizeVisibleArea(Number(area.value));
    demo.style.setProperty('--covered', `${100 - value}%`);
    const output = demo.querySelector('output');
    if (output) output.textContent = `${value}%`;
  });
  demo
    .querySelector<HTMLInputElement>('[data-demo-blur]')
    ?.addEventListener('change', (event) =>
      demo.classList.toggle(
        'unmasked',
        !(event.currentTarget as HTMLInputElement).checked,
      ),
    );
  demo
    .querySelector<HTMLButtonElement>('[data-demo-alias]')
    ?.addEventListener('click', (event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const active = button.getAttribute('aria-pressed') !== 'true';
      button.setAttribute('aria-pressed', String(active));
      button.textContent = active ? 'Remover apelido' : 'Usar apelido';
      for (const name of demo.querySelectorAll('[data-alias-name]'))
        name.textContent = active ? 'Meu trabalho' : 'Equipe Criativa';
    });
}
