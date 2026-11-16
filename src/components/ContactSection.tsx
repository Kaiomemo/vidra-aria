import { useEffect, useState, type FormEvent } from 'react';
import {
  Check,
  Copy,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  GLAZING_SERVICES,
  buildWhatsAppUrl,
} from '../data/glazingData';
import { Reveal } from './MotionPrimitives';

interface ContactSectionProps {
  selectedService: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  service?: string;
}

export function ContactSection({ selectedService }: ContactSectionProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(
    selectedService || GLAZING_SERVICES[0].title
  );
  const [details, setDetails] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setService(selectedService);
      setSubmittedUrl(null);
    }
  }, [selectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo.';
    }
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone = 'Informe um WhatsApp ou telefone válido com DDD.';
    }
    if (!service.trim()) {
      nextErrors.service = 'Selecione o tipo de serviço.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const messageLines = [
      `Olá, Vidraçaria RS 240! Gostaria de solicitar um orçamento:`,
      `• Nome: ${name.trim()}`,
      `• Telefone: ${phone.trim()}`,
      `• Serviço: ${service}`,
      details.trim() ? `• Detalhes/Medidas: ${details.trim()}` : '',
    ].filter(Boolean);

    const url = buildWhatsAppUrl(messageLines.join('\n'));
    setSubmittedUrl(url);

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_INFO.address);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2500);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  return (
    <section
      id="contato"
      className="border-t border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-surface))] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Channels & Real Address */}
          <Reveal className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="mb-3 text-xs font-medium tracking-[0.18em] text-[hsl(var(--accent-gold))] uppercase">
                Atendimento Direto
              </p>
              <h2 className="font-display text-[clamp(1.85rem,3.4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.025em] text-[hsl(var(--text-primary))]">
                Fale direto pelo WhatsApp.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[hsl(var(--text-secondary))]">
                Envie medidas aproximadas ou agende uma visita técnica em Portão e região.
              </p>

              <div className="mt-8">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex min-h-[48px] items-center gap-2.5 rounded-lg bg-[hsl(var(--accent-ocean))] px-6 py-3.5 text-sm font-semibold text-[hsl(var(--bg-canvas))] shadow-[0_12px_32px_-8px_hsl(var(--accent-ocean)/0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[hsl(var(--accent-ocean-bright))]"
                >
                  <MessageCircle size={18} aria-hidden="true" />
                  <span>Conversar no WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="mt-12 space-y-6 border-t border-[hsl(var(--border-hairline))] pt-8">
              <div className="flex items-start gap-3.5">
                <MapPin
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[hsl(var(--accent-gold))]"
                />
                <div>
                  <p className="text-xs font-medium text-[hsl(var(--text-muted))]">
                    Endereço
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[hsl(var(--text-primary))]">
                    {BUSINESS_INFO.address}
                  </p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-4">
                    <a
                      href={BUSINESS_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring text-xs font-medium text-[hsl(var(--accent-ocean-bright))] hover:underline"
                    >
                      Ver no mapa
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyAddress}
                      className="focus-ring inline-flex items-center gap-1.5 text-xs text-[hsl(var(--text-secondary))] transition-colors hover:text-[hsl(var(--text-primary))]"
                    >
                      {copiedAddress ? (
                        <>
                          <Check size={13} className="text-[hsl(var(--state-success))]" />
                          <span>Endereço copiado</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copiar endereço</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone
                  size={18}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[hsl(var(--accent-gold))]"
                />
                <div>
                  <p className="text-xs font-medium text-[hsl(var(--text-muted))]">
                    Telefone e WhatsApp
                  </p>
                  <a
                    href={`tel:+${BUSINESS_INFO.phoneSanitized}`}
                    className="font-mono-tech focus-ring mt-1 inline-block text-sm text-[hsl(var(--text-primary))] transition-colors hover:text-[hsl(var(--accent-ocean-bright))]"
                  >
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Validated Glassmorphism Quote Form */}
          <Reveal className="lg:col-span-7" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass-panel rounded-2xl p-6 sm:p-10"
            >
              <div className="mb-8 border-b border-[hsl(var(--border-hairline))] pb-5">
                <h3 className="font-display text-xl font-semibold text-[hsl(var(--text-primary))]">
                  Solicitar Orçamento
                </h3>
                <p className="mt-1 text-sm text-[hsl(var(--text-secondary))]">
                  Preencha os campos para iniciar seu atendimento com os dados já organizados.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="quote-name"
                    className="mb-2 block text-xs font-medium text-[hsl(var(--text-secondary))]"
                  >
                    Seu nome *
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Ex.: Mariana Silva"
                    aria-invalid={Boolean(errors.name)}
                    className="focus-ring w-full rounded-lg border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 py-3 text-sm text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] transition-colors focus:border-[hsl(var(--accent-ocean))]"
                  />
                  {errors.name && (
                    <p role="alert" className="mt-1.5 text-xs text-[hsl(var(--state-error))]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="quote-phone"
                    className="mb-2 block text-xs font-medium text-[hsl(var(--text-secondary))]"
                  >
                    WhatsApp / Telefone *
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="(51) 99999-9999"
                    aria-invalid={Boolean(errors.phone)}
                    className="focus-ring font-mono-tech w-full rounded-lg border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 py-3 text-sm text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] transition-colors focus:border-[hsl(var(--accent-ocean))]"
                  />
                  {errors.phone && (
                    <p role="alert" className="mt-1.5 text-xs text-[hsl(var(--state-error))]">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="quote-service"
                  className="mb-2 block text-xs font-medium text-[hsl(var(--text-secondary))]"
                >
                  Tipo de serviço *
                </label>
                <select
                  id="quote-service"
                  name="service"
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    if (errors.service) setErrors({ ...errors, service: undefined });
                  }}
                  className="focus-ring w-full rounded-lg border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 py-3 text-sm text-[hsl(var(--text-primary))] transition-colors focus:border-[hsl(var(--accent-ocean))]"
                >
                  {GLAZING_SERVICES.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p role="alert" className="mt-1.5 text-xs text-[hsl(var(--state-error))]">
                    {errors.service}
                  </p>
                )}
              </div>

              <div className="mt-6">
                <label
                  htmlFor="quote-details"
                  className="mb-2 block text-xs font-medium text-[hsl(var(--text-secondary))]"
                >
                  Medidas aproximadas ou observações
                </label>
                <textarea
                  id="quote-details"
                  name="details"
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Ex.: Box de canto com 1,20m x 0,90m, vidro incolor..."
                  className="focus-ring w-full resize-y rounded-lg border border-[hsl(var(--border-hairline))] bg-[hsl(var(--bg-canvas))] px-4 py-3 text-sm text-[hsl(var(--text-primary))] placeholder:text-[hsl(var(--text-muted))] transition-colors focus:border-[hsl(var(--accent-ocean))]"
                />
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="focus-ring inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[hsl(var(--accent-ocean))] px-6 py-3.5 text-sm font-semibold text-[hsl(var(--bg-canvas))] transition-colors duration-200 hover:bg-[hsl(var(--accent-ocean-bright))]"
                >
                  <Send size={16} aria-hidden="true" />
                  <span>Enviar para o WhatsApp</span>
                </button>

                {submittedUrl && (
                  <div
                    role="status"
                    className="flex flex-wrap items-center gap-3 text-xs font-medium text-[hsl(var(--state-success))]"
                  >
                    <span className="inline-flex items-center gap-1.5">
                      <Check size={15} aria-hidden="true" />
                      <span>Solicitação pronta!</span>
                    </span>
                    <a
                      href={submittedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring text-[hsl(var(--accent-ocean-bright))] underline"
                    >
                      Abrir WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
