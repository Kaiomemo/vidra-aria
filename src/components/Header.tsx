import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/glazingData';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="glass-nav fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-8 px-5 sm:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#inicio"
          className="font-display focus-ring shrink-0 whitespace-nowrap text-lg font-semibold tracking-tight text-[hsl(var(--text-primary))] transition-colors hover:text-[hsl(var(--accent-ocean-bright))]"
        >
          {BUSINESS_INFO.shortName}
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-7 md:flex"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring group relative shrink-0 whitespace-nowrap py-1 text-sm font-medium text-[hsl(var(--text-secondary))] transition-colors duration-200 hover:text-[hsl(var(--text-primary))]"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[hsl(var(--accent-ocean))] transition-transform duration-200 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action (+ mobile menu toggle on small screens) */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#contato"
            className="focus-ring hidden shrink-0 whitespace-nowrap rounded-lg bg-[hsl(var(--accent-ocean))] px-4 py-2 text-xs font-semibold tracking-wide text-[hsl(var(--bg-canvas))] transition-colors duration-200 hover:bg-[hsl(var(--accent-ocean-bright))] sm:inline-flex"
          >
            Pedir Orçamento
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[hsl(var(--border-hairline))] text-[hsl(var(--text-primary))] transition-colors hover:border-[hsl(var(--accent-ocean))] md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas)/0.97)] px-5 py-6 backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Navegação móvel" className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="focus-ring flex min-h-[44px] items-center border-b border-[hsl(var(--border-hairline)/0.5)] text-base font-medium text-[hsl(var(--text-primary))] transition-colors hover:text-[hsl(var(--accent-ocean))]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={handleNavClick}
              className="focus-ring mt-4 flex min-h-[44px] items-center justify-center rounded-lg bg-[hsl(var(--accent-ocean))] px-5 py-3 text-sm font-semibold text-[hsl(var(--bg-canvas))]"
            >
              Pedir Orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
