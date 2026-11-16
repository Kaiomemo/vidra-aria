import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { BUSINESS_INFO, HERO_MEDIA, buildWhatsAppUrl } from '../data/glazingData';
import { ResilientImage } from './ResilientImage';

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[90svh] items-end overflow-hidden pt-20"
    >
      {/* Full-bleed Architectural Glass Photography */}
      <div className="absolute inset-0 z-0">
        <ResilientImage
          src={HERO_MEDIA.image}
          alt={HERO_MEDIA.alt}
          loading="eager"
          fetchPriority="high"
          className="h-full w-full"
        />
        {/* Measured contrast scrims ensuring >= 4.5:1 legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg-canvas))] via-[hsl(var(--bg-canvas)/0.62)] to-[hsl(var(--bg-canvas)/0.38)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--bg-canvas)/0.88)] via-[hsl(var(--bg-canvas)/0.35)] to-transparent"
        />
      </div>

      {/* Subtle architectural hairline frame at bottom edge inviting scroll */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-14 pt-24 sm:px-8 sm:pb-20">
        <motion.div {...motionProps} className="max-w-3xl">
          <p className="mb-5 text-xs font-medium tracking-[0.18em] text-[hsl(var(--accent-gold))] uppercase">
            Portão · Rio Grande do Sul
          </p>

          <h1 className="font-display text-[clamp(2.5rem,5.4vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[hsl(var(--text-primary))]">
            Transparência que define sua arquitetura.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[hsl(var(--text-secondary))] sm:text-lg">
            Vidros temperados, espelhos e fachadas sob medida pela{' '}
            <span className="text-[hsl(var(--text-primary))]">
              {BUSINESS_INFO.name}
            </span>
            .
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-[48px] shrink-0 items-center gap-2.5 whitespace-nowrap rounded-lg bg-[hsl(var(--accent-ocean))] px-6 py-3.5 text-sm font-semibold text-[hsl(var(--bg-canvas))] shadow-[0_12px_32px_-8px_hsl(var(--accent-ocean)/0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-ocean-bright))]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Conversar no WhatsApp</span>
            </a>

            <a
              href="#servicos"
              className="focus-ring group inline-flex min-h-[44px] shrink-0 items-center gap-2 whitespace-nowrap border-b border-[hsl(var(--border-hairline))] pb-1 text-sm font-medium text-[hsl(var(--text-primary))] transition-colors duration-200 hover:border-[hsl(var(--accent-gold))] hover:text-[hsl(var(--accent-gold-soft))]"
            >
              <span>Explorar soluções</span>
              <ArrowDownRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
