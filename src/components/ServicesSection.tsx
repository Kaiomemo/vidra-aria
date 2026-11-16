import { ArrowUpRight } from 'lucide-react';
import { GLAZING_SERVICES, buildWhatsAppUrl } from '../data/glazingData';
import { Reveal } from './MotionPrimitives';
import { ResilientImage } from './ResilientImage';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [boxService, espelhoService, portasService, fachadasService, tamposService, manutencaoService] =
    GLAZING_SERVICES;

  return (
    <section
      id="servicos"
      className="border-t border-[hsl(var(--border-hairline))] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.18em] text-[hsl(var(--accent-gold))] uppercase">
              Especialidades
            </p>
            <h2 className="font-display text-[clamp(1.85rem,3.4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[hsl(var(--text-primary))]">
              Soluções em vidro sob medida.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-[hsl(var(--text-secondary))]">
            Execução limpa e ferragens selecionadas para residências e fachadas comerciais.
          </p>
        </Reveal>

        {/* Asymmetric Bento Grid — Row 1 (7 + 5), Row 2 (4 + 4 + 4), Row 3 (12 Horizontal Split) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* 01. Box para Banheiro (7 cols) */}
          <Reveal className="lg:col-span-7" delay={0.05}>
            <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-xl transition-colors duration-200 hover:border-[hsl(var(--accent-ocean)/0.5)]">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <ResilientImage
                  src={boxService.image}
                  alt={boxService.imageAlt}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="font-mono-tech text-xs text-[hsl(var(--accent-gold))]">
                      {boxService.index}
                    </span>
                    <span className="text-xs text-[hsl(var(--text-muted))]">
                      {boxService.specLabel}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-[hsl(var(--text-primary))] sm:text-2xl">
                    {boxService.title}
                  </h3>
                  <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-[hsl(var(--text-secondary))]">
                    {boxService.shortDesc}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[hsl(var(--border-hairline))] pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectService(boxService.title)}
                    className="focus-ring inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold tracking-wide text-[hsl(var(--accent-ocean-bright))] transition-colors hover:text-[hsl(var(--text-primary))]"
                  >
                    <span>Solicitar orçamento</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                  <a
                    href={buildWhatsAppUrl(boxService.whatsappPrompt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-xs text-[hsl(var(--text-muted))] transition-colors hover:text-[hsl(var(--accent-gold-soft))]"
                  >
                    WhatsApp direto
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {/* 02. Espelhos Sob Medida (5 cols) */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-xl transition-colors duration-200 hover:border-[hsl(var(--accent-ocean)/0.5)]">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <ResilientImage
                  src={espelhoService.image}
                  alt={espelhoService.imageAlt}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                <div>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="font-mono-tech text-xs text-[hsl(var(--accent-gold))]">
                      {espelhoService.index}
                    </span>
                    <span className="text-xs text-[hsl(var(--text-muted))]">
                      {espelhoService.specLabel}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-[hsl(var(--text-primary))] sm:text-2xl">
                    {espelhoService.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[hsl(var(--text-secondary))]">
                    {espelhoService.shortDesc}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[hsl(var(--border-hairline))] pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectService(espelhoService.title)}
                    className="focus-ring inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold tracking-wide text-[hsl(var(--accent-ocean-bright))] transition-colors hover:text-[hsl(var(--text-primary))]"
                  >
                    <span>Solicitar orçamento</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                  <a
                    href={buildWhatsAppUrl(espelhoService.whatsappPrompt)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring text-xs text-[hsl(var(--text-muted))] transition-colors hover:text-[hsl(var(--accent-gold-soft))]"
                  >
                    WhatsApp direto
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Row 2: 03, 04, 05 (4 + 4 + 4 cols) */}
          {[portasService, fachadasService, tamposService].map((service, idx) => (
            <Reveal key={service.id} className="lg:col-span-4" delay={0.06 * (idx + 1)}>
              <article className="glass-panel group flex h-full flex-col overflow-hidden rounded-xl transition-colors duration-200 hover:border-[hsl(var(--accent-ocean)/0.5)]">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <ResilientImage
                    src={service.image}
                    alt={service.imageAlt}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="mb-2.5 flex items-center justify-between gap-2">
                      <span className="font-mono-tech text-xs text-[hsl(var(--accent-gold))]">
                        {service.index}
                      </span>
                      <span className="truncate text-xs text-[hsl(var(--text-muted))]">
                        {service.specLabel}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-[hsl(var(--text-primary))] sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--text-secondary))]">
                      {service.shortDesc}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-between border-t border-[hsl(var(--border-hairline))] pt-4">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="focus-ring inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold tracking-wide text-[hsl(var(--accent-ocean-bright))] transition-colors hover:text-[hsl(var(--text-primary))]"
                    >
                      <span>Solicitar orçamento</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </button>
                    <a
                      href={buildWhatsAppUrl(service.whatsappPrompt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring text-xs text-[hsl(var(--text-muted))] transition-colors hover:text-[hsl(var(--accent-gold-soft))]"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}

          {/* Row 3: 06. Manutenção e Troca de Vidros (Full-width horizontal architectural strip) */}
          <Reveal className="lg:col-span-12" delay={0.12}>
            <article className="glass-panel flex flex-col justify-between gap-6 rounded-xl p-6 sm:p-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <div className="mb-2 flex items-center gap-3 text-xs">
                  <span className="font-mono-tech text-[hsl(var(--accent-gold))]">
                    {manutencaoService.index}
                  </span>
                  <span aria-hidden="true" className="text-[hsl(var(--text-muted))]">
                    ·
                  </span>
                  <span className="text-[hsl(var(--text-muted))]">
                    {manutencaoService.specLabel}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-[hsl(var(--text-primary))] sm:text-2xl">
                  {manutencaoService.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--text-secondary))]">
                  {manutencaoService.shortDesc}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onSelectService(manutencaoService.title)}
                  className="focus-ring min-h-[44px] shrink-0 whitespace-nowrap rounded-lg border border-[hsl(var(--border-hairline))] px-5 py-2.5 text-xs font-semibold text-[hsl(var(--text-primary))] transition-colors hover:border-[hsl(var(--accent-gold))] hover:text-[hsl(var(--accent-gold-soft))]"
                >
                  Agendar visita técnica
                </button>
                <a
                  href={buildWhatsAppUrl(manutencaoService.whatsappPrompt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-[hsl(var(--accent-ocean))] px-5 py-2.5 text-xs font-semibold text-[hsl(var(--bg-canvas))] transition-colors hover:bg-[hsl(var(--accent-ocean-bright))]"
                >
                  <span>Chamar no WhatsApp</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
