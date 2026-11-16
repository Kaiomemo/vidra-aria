import { ArrowUpRight } from 'lucide-react';
import {
  BUSINESS_INFO,
  TECHNICAL_PILLARS,
  buildWhatsAppUrl,
} from '../data/glazingData';
import { Reveal } from './MotionPrimitives';
import { ResilientImage } from './ResilientImage';

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="border-t border-[hsl(var(--border-hairline))] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Large-format architectural detail */}
          <Reveal className="lg:col-span-6">
            <div className="relative h-full min-h-[340px] overflow-hidden rounded-xl border border-[hsl(var(--border-hairline))]">
              <ResilientImage
                src="/src/assets/images/service_portas_janelas_1794859429656.jpg"
                alt="Instalação de esquadrias e portas amplas em vidro temperado pela Vidraçaria RS 240"
                className="h-full w-full"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg-canvas)/0.72)] via-transparent to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-[hsl(var(--text-primary)/0.16)] pt-4 text-xs text-[hsl(var(--text-secondary))]">
                <span>{BUSINESS_INFO.name}</span>
                <span className="font-mono-tech text-[hsl(var(--accent-gold-soft))]">
                  Portão · RS
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: Authoritative editorial statement + technical pillars */}
          <Reveal className="flex flex-col justify-between lg:col-span-6" delay={0.1}>
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.18em] text-[hsl(var(--accent-gold))] uppercase">
                Sobre a Empresa
              </p>
              <h2 className="font-display text-[clamp(1.85rem,3.2vw,2.85rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[hsl(var(--text-primary))]">
                Precisão milimétrica do corte à instalação.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[hsl(var(--text-secondary))]">
                Localizada na Av. Perimetral, 147, em Portão, a{' '}
                <strong className="font-medium text-[hsl(var(--text-primary))]">
                  {BUSINESS_INFO.name}
                </strong>{' '}
                executa projetos residenciais e comerciais com foco em transparência,
                alinhamento estrutural e segurança normativa.
              </p>
            </div>

            <div className="mt-10 divide-y divide-[hsl(var(--border-hairline))] border-y border-[hsl(var(--border-hairline))]">
              {TECHNICAL_PILLARS.map((pillar) => (
                <div
                  key={pillar.code}
                  className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4"
                >
                  <span className="font-mono-tech text-xs font-medium text-[hsl(var(--accent-ocean-bright))] sm:col-span-3">
                    {pillar.code}
                  </span>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-base font-semibold text-[hsl(var(--text-primary))]">
                      {pillar.label}
                    </h3>
                    <p className="mt-1 text-sm text-[hsl(var(--text-secondary))]">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={buildWhatsAppUrl('Olá! Gostaria de agendar uma medição técnica com a Vidraçaria RS 240.')}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[hsl(var(--accent-ocean-bright))] transition-colors hover:text-[hsl(var(--text-primary))]"
              >
                <span>Agendar medição técnica pelo WhatsApp</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
