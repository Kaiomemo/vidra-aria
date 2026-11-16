import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/glazingData';

const FOOTER_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] py-14">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="font-display focus-ring inline-block text-lg font-semibold tracking-tight text-[hsl(var(--text-primary))]"
            >
              {BUSINESS_INFO.name}
            </a>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[hsl(var(--text-secondary))]">
              {BUSINESS_INFO.address}
            </p>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-tech focus-ring mt-2 inline-block text-sm text-[hsl(var(--accent-ocean-bright))] hover:underline"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap gap-x-8 gap-y-3 md:col-span-4"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring text-sm text-[hsl(var(--text-secondary))] transition-colors hover:text-[hsl(var(--text-primary))]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="md:col-span-3 md:text-right">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-[42px] items-center justify-center rounded-lg border border-[hsl(var(--border-hairline))] px-4 py-2 text-xs font-semibold text-[hsl(var(--text-primary))] transition-colors hover:border-[hsl(var(--accent-gold))] hover:text-[hsl(var(--accent-gold-soft))]"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[hsl(var(--border-hairline))] pt-6 text-xs text-[hsl(var(--text-muted))] sm:flex-row">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Todos os direitos reservados.</p>
          <p>Portão · Rio Grande do Sul</p>
        </div>
      </div>
    </footer>
  );
}
