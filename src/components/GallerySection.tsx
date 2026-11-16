import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, MessageCircle, X } from 'lucide-react';
import {
  GALLERY_WORKS,
  type GalleryCategory,
  type GalleryWork,
  buildWhatsAppUrl,
} from '../data/glazingData';
import { Reveal } from './MotionPrimitives';
import { ResilientImage } from './ResilientImage';

const FILTER_CATEGORIES: GalleryCategory[] = [
  'Todos',
  'Residencial',
  'Comercial',
  'Sob Medida',
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('Todos');
  const [selectedWork, setSelectedWork] = useState<GalleryWork | null>(null);

  const filteredWorks =
    activeCategory === 'Todos'
      ? GALLERY_WORKS
      : GALLERY_WORKS.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!selectedWork) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedWork(null);
      } else if (e.key === 'ArrowRight') {
        const idx = filteredWorks.findIndex((w) => w.id === selectedWork.id);
        if (idx !== -1) {
          setSelectedWork(filteredWorks[(idx + 1) % filteredWorks.length]);
        }
      } else if (e.key === 'ArrowLeft') {
        const idx = filteredWorks.findIndex((w) => w.id === selectedWork.id);
        if (idx !== -1) {
          setSelectedWork(
            filteredWorks[(idx - 1 + filteredWorks.length) % filteredWorks.length]
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedWork, filteredWorks]);

  const stepLightbox = (direction: 1 | -1) => {
    if (!selectedWork || filteredWorks.length === 0) return;
    const idx = filteredWorks.findIndex((w) => w.id === selectedWork.id);
    if (idx === -1) return;
    const nextIdx = (idx + direction + filteredWorks.length) % filteredWorks.length;
    setSelectedWork(filteredWorks[nextIdx]);
  };

  return (
    <section
      id="galeria"
      className="border-t border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-medium tracking-[0.18em] text-[hsl(var(--accent-gold))] uppercase">
              Portfólio de Instalações
            </p>
            <h2 className="font-display text-[clamp(1.85rem,3.4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[hsl(var(--text-primary))]">
              Acabamento visível em cada detalhe.
            </h2>
          </div>

          {/* Interactive Category Filter Control */}
          <div
            role="tablist"
            aria-label="Filtrar galeria por categoria"
            className="inline-flex flex-wrap items-center gap-1 rounded-lg border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] p-1"
          >
            {FILTER_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`focus-ring min-h-[38px] shrink-0 whitespace-nowrap rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-[hsl(var(--accent-ocean))] text-[hsl(var(--bg-canvas))]'
                      : 'text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--text-primary))]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Asymmetric Mosaic Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {filteredWorks.map((work, index) => {
            const spanClass =
              activeCategory === 'Todos'
                ? work.aspectClass
                : 'lg:col-span-6 aspect-[16/10]';

            return (
              <Reveal key={work.id} delay={0.05 * index} className={spanClass}>
                <button
                  type="button"
                  onClick={() => setSelectedWork(work)}
                  aria-label={`Ampliar projeto: ${work.title}`}
                  className="focus-ring group relative block h-full w-full overflow-hidden rounded-xl border border-[hsl(var(--border-hairline))] text-left"
                >
                  <ResilientImage
                    src={work.image}
                    alt={work.imageAlt}
                    className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg-canvas)/0.9)] via-[hsl(var(--bg-canvas)/0.22)] to-transparent"
                  />

                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas)/0.7)] text-[hsl(var(--text-primary))] opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
                    <Expand size={15} aria-hidden="true" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="mb-1.5 flex items-center gap-2 text-xs text-[hsl(var(--accent-gold-soft))]">
                      <span>{work.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[hsl(var(--text-secondary))]">{work.detail}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[hsl(var(--text-primary))] sm:text-xl">
                      {work.title}
                    </h3>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedWork && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedWork.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--bg-canvas)/0.92)] p-4 backdrop-blur-xl sm:p-8"
          onClick={() => setSelectedWork(null)}
        >
          <div
            className="glass-panel relative w-full max-w-5xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[hsl(var(--border-hairline))] px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs text-[hsl(var(--accent-gold))]">
                  {selectedWork.category} · {selectedWork.detail}
                </p>
                <h3 className="font-display mt-0.5 text-lg font-semibold text-[hsl(var(--text-primary))]">
                  {selectedWork.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                aria-label="Fechar visualização"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-[hsl(var(--border-hairline))] text-[hsl(var(--text-secondary))] transition-colors hover:border-[hsl(var(--accent-ocean))] hover:text-[hsl(var(--text-primary))]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full bg-[hsl(var(--bg-canvas))]">
              <ResilientImage
                src={selectedWork.image}
                alt={selectedWork.imageAlt}
                loading="eager"
                className="h-full w-full"
              />

              {filteredWorks.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() => stepLightbox(-1)}
                    aria-label="Foto anterior"
                    className="focus-ring absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas)/0.75)] text-[hsl(var(--text-primary))] backdrop-blur-md transition-colors hover:border-[hsl(var(--accent-ocean))]"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    type="button"
                    onClick={() => stepLightbox(1)}
                    aria-label="Próxima foto"
                    className="focus-ring absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-lg border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas)/0.75)] text-[hsl(var(--text-primary))] backdrop-blur-md transition-colors hover:border-[hsl(var(--accent-ocean))]"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6">
              <span className="text-xs text-[hsl(var(--text-muted))]">
                Use as setas do teclado para navegar
              </span>
              <a
                href={buildWhatsAppUrl(
                  `Olá! Vi "${selectedWork.title}" na galeria da Vidraçaria RS 240 e gostaria de um orçamento.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[hsl(var(--accent-ocean))] px-5 py-2 text-xs font-semibold text-[hsl(var(--bg-canvas))] transition-colors hover:bg-[hsl(var(--accent-ocean-bright))]"
              >
                <MessageCircle size={15} aria-hidden="true" />
                <span>Orçar projeto similar</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
