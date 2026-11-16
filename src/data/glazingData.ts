export interface GlazingService {
  id: string;
  index: string;
  title: string;
  shortDesc: string;
  specLabel: string;
  image: string;
  imageAlt: string;
  whatsappPrompt: string;
}

export type GalleryCategory = 'Todos' | 'Residencial' | 'Comercial' | 'Sob Medida';

export interface GalleryWork {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'Todos'>;
  detail: string;
  image: string;
  imageAlt: string;
  aspectClass: string;
}

export const BUSINESS_INFO = {
  name: 'Vidraçaria RS 240 Ltda',
  shortName: 'Vidraçaria RS 240',
  address: 'Av. Perimetral, 147 - Centro, Portão - RS, 93180-000',
  phoneDisplay: '+55 51 99718-6240',
  phoneSanitized: '5551997186240',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+Perimetral,+147+-+Centro,+Port%C3%A3o+-+RS,+93180-000',
};

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMsg =
    'Olá! Gostaria de solicitar um orçamento com a Vidraçaria RS 240.';
  const text = encodeURIComponent(customMessage || defaultMsg);
  return `https://wa.me/${BUSINESS_INFO.phoneSanitized}?text=${text}`;
}

export const HERO_MEDIA = {
  image: '/src/assets/images/hero_glass_architecture_1794859428990.jpg',
  alt: 'Fachada arquitetônica residencial em vidro temperado estrutural com iluminação quente ao entardecer',
};

export const GLAZING_SERVICES: GlazingService[] = [
  {
    id: 'box-banheiro',
    index: '01.',
    title: 'Box para Banheiro',
    shortDesc: 'Vidro temperado 8mm com ferragens de alta precisão e vedação impecável.',
    specLabel: 'Temperado 8mm · Roldanas aparentes ou padrão',
    image: '/src/assets/images/service_box_banheiro_1794859428824.jpg',
    imageAlt: 'Box de banheiro em vidro temperado transparente do piso ao teto com ferragens douradas',
    whatsappPrompt: 'Olá! Gostaria de um orçamento para Box para Banheiro sob medida.',
  },
  {
    id: 'espelhos-medida',
    index: '02.',
    title: 'Espelhos Sob Medida',
    shortDesc: 'Corte lapidado, bisotê ou iluminação em LED com reflexo sem distorções.',
    specLabel: 'Espelho prata 4mm · Bisotê ou orgânico',
    image: '/src/assets/images/service_espelho_medida_1794859429026.jpg',
    imageAlt: 'Espelho decorativo sob medida com borda lapidada, moldura fina dourada e iluminação indireta',
    whatsappPrompt: 'Olá! Gostaria de um orçamento para Espelho Sob Medida.',
  },
  {
    id: 'portas-janelas',
    index: '03.',
    title: 'Portas e Janelas de Vidro',
    shortDesc: 'Sistemas de correr e pivotantes que integram ambientes com leveza e segurança.',
    specLabel: 'Temperado 8mm e 10mm · Vãos amplos',
    image: '/src/assets/images/service_portas_janelas_1794859429656.jpg',
    imageAlt: 'Portas e janelas panorâmicas de vidro temperado de correr integrando sala e área externa',
    whatsappPrompt: 'Olá! Gostaria de um orçamento para Portas e Janelas de Vidro.',
  },
  {
    id: 'fachadas-pele',
    index: '04.',
    title: 'Fachadas e Peles de Vidro',
    shortDesc: 'Vitrines comerciais e pele de vidro com controle solar e alinhamento estrutural.',
    specLabel: 'Laminado ou temperado · Uso comercial',
    image: '/src/assets/images/service_fachadas_pele_1794859429110.jpg',
    imageAlt: 'Fachada comercial moderna em pele de vidro azul refletivo com perfis metálicos precisos',
    whatsappPrompt: 'Olá! Gostaria de um orçamento para Fachada ou Pele de Vidro.',
  },
  {
    id: 'tampos-mesa',
    index: '05.',
    title: 'Tampos de Mesa',
    shortDesc: 'Tampos em vidro incolor, fumê ou extra clear com acabamento lapidado diamante.',
    specLabel: 'Espessuras de 8mm a 15mm · Corte CNC',
    image: '/src/assets/images/service_tampos_manutencao_1794859430662.jpg',
    imageAlt: 'Tampo de mesa espesso em vidro temperado com bordas polidas sobre base arquitetônica',
    whatsappPrompt: 'Olá! Gostaria de um orçamento para Tampo de Mesa em vidro.',
  },
  {
    id: 'manutencao-troca',
    index: '06.',
    title: 'Manutenção e Troca de Vidros',
    shortDesc: 'Substituição ágil de chapas trincadas, regulagem de molas, fechaduras e roldanas.',
    specLabel: 'Atendimento em Portão e região',
    image: '/src/assets/images/service_portas_janelas_1794859429656.jpg',
    imageAlt: 'Manutenção e regulagem precisa de portas e esquadrias de vidro temperado',
    whatsappPrompt: 'Olá! Preciso de atendimento para Manutenção ou Troca de Vidros.',
  },
];

export const GALLERY_WORKS: GalleryWork[] = [
  {
    id: 'obra-pavilion',
    title: 'Fechamento Estrutural em Vidro',
    category: 'Residencial',
    detail: 'Vão panorâmico piso-teto · Portão e região',
    image: '/src/assets/images/hero_glass_architecture_1794859428990.jpg',
    imageAlt: 'Fechamento residencial em vidro temperado estrutural do piso ao teto',
    aspectClass: 'lg:col-span-7 aspect-[16/10]',
  },
  {
    id: 'obra-box-gold',
    title: 'Box Piso-Teto com Ferragem Dourada',
    category: 'Residencial',
    detail: 'Vidro incolor 8mm · Dobradiças latão escovado',
    image: '/src/assets/images/service_box_banheiro_1794859428824.jpg',
    imageAlt: 'Box de vidro temperado piso-teto instalado em banheiro contemporâneo',
    aspectClass: 'lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full',
  },
  {
    id: 'obra-pele-azul',
    title: 'Pele de Vidro Corporativa',
    category: 'Comercial',
    detail: 'Painéis refletivos de controle solar',
    image: '/src/assets/images/service_fachadas_pele_1794859429110.jpg',
    imageAlt: 'Fachada corporativa em pele de vidro com painéis refletivos azulados',
    aspectClass: 'lg:col-span-4 aspect-[4/3]',
  },
  {
    id: 'obra-espelho-led',
    title: 'Espelho Retroiluminado Sob Medida',
    category: 'Sob Medida',
    detail: 'Corte curvo com halo de luz quente',
    image: '/src/assets/images/service_espelho_medida_1794859429026.jpg',
    imageAlt: 'Espelho com cantos arredondados e iluminação LED traseira em lavabo',
    aspectClass: 'lg:col-span-4 aspect-[4/3]',
  },
  {
    id: 'obra-tampo-mesa',
    title: 'Tampo Temperado Borda Polida',
    category: 'Sob Medida',
    detail: 'Acabamento diamante de alta transparência',
    image: '/src/assets/images/service_tampos_manutencao_1794859430662.jpg',
    imageAlt: 'Tampo de mesa em vidro temperado espesso com acabamento polido',
    aspectClass: 'lg:col-span-4 aspect-[4/3]',
  },
];

export const TECHNICAL_PILLARS = [
  {
    code: 'NBR 14698',
    label: 'Vidro Temperado Certificado',
    detail: 'Resistência mecânica e segurança normativa em cada chapa instalada.',
  },
  {
    code: 'Sob Medida',
    label: 'Medição Técnica no Local',
    detail: 'Levantamento milimétrico em obra para encaixe limpo e sem folgas.',
  },
  {
    code: 'RS-240',
    label: 'Atendimento em Portão e Região',
    detail: 'Estrutura local na Av. Perimetral, 147 com agilidade do corte à montagem.',
  },
];
