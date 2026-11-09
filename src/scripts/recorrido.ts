/**
 * Recorrido por plantas: la planta que cruza el centro de la pantalla ilumina su
 * nivel en el edificio fijo (escritorio) y en la barra de plantas (móvil).
 */
export const initRecorrido = (root: HTMLElement): void => {
  const section = root.closest('section');
  const building = root.querySelector<SVGSVGElement>('[data-building]');
  const current = root.querySelector<HTMLElement>('[data-current]');
  const minis = [...(section?.querySelectorAll<HTMLElement>('[data-mini-item]') ?? [])];
  const plantas = [...root.querySelectorAll<HTMLElement>('[data-planta]')];

  const activate = (id: string, label: string): void => {
    if (building) {
      building.setAttribute('data-has-active', '');
      building.querySelectorAll('[data-level]').forEach((g) => g.classList.toggle('on', g.getAttribute('data-level') === id));
      building.querySelectorAll('[data-label]').forEach((t) => t.classList.toggle('on', t.getAttribute('data-label') === id));
    }
    if (current) current.textContent = label;
    minis.forEach((m) => {
      const on = m.dataset.miniItem === id;
      m.toggleAttribute('data-on', on);
      if (on) m.parentElement?.scrollTo({ left: m.offsetLeft - 16, behavior: 'smooth' });
    });
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        activate(el.dataset.planta ?? '', el.dataset.label ?? '');
      }
    },
    { rootMargin: '-45% 0px -45% 0px' },
  );
  plantas.forEach((p) => io.observe(p));
  const first = plantas[0];
  if (first) activate(first.dataset.planta ?? '', first.dataset.label ?? '');
};
