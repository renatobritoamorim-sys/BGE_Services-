export type Language = 'en' | 'pt';

export interface TranslationStructure {
  meta: {
    title: string;
    description: string;
  };
  header: {
    home: string;
    services: string;
    whyUs: string;
    faq: string;
    contact: string;
    callNow: string;
  };
  hero: {
    h1: string;
    subheadline: string;
    ctaCall: string;
    ctaWhatsapp: string;
    badge247: string;
    badgeFast: string;
    badgeLocal: string;
    badgePro: string;
  };
  services: {
    h2: string;
    subtitle?: string;
    items: {
      title: string;
      desc: string;
      points: string[];
      cta: string;
      image: string;
      imageAlt: string;
    }[];
  };
  whyChoose: {
    h2: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  serviceArea: {
    h2: string;
    desc: string;
    listTitle: string;
  };
  howItWorks: {
    h2: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  faq: {
    h2: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  finalCta: {
    h2: string;
    btnCall: string;
    btnWhatsapp: string;
    btnQuote: string;
  };
  whatsappPopup: {
    message: string;
    button: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    contact: string;
    rights: string;
  };
}
