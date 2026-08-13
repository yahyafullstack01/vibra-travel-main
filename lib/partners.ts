export type PartnerLogo = {
  src: string;
  srcDark?: string;
  alt: string;
  href: string;
  colorLogo?: boolean;
};

export const partnerLogos: PartnerLogo[] = [
  {
    src: "/featured/raquex.png?v=tagline",
    srcDark: "/featured/raquex-light.png",
    alt: "Raquex",
    href: "https://www.raquex.com/discount/VIBRATRAVEL10",
    colorLogo: true,
  },
  {
    src: "/featured/deite.png",
    alt: "Déité",
    href: "https://deite.co.uk/discount/VIBRA10",
    colorLogo: true,
  },
  {
    src: "/featured/preserva.png",
    alt: "Preserva",
    href: "https://www.preserva.co.uk/discount/VIBRA10",
    colorLogo: true,
  },
  {
    src: "/featured/padel-culture.png?v=orange",
    alt: "Padel Culture Magazine",
    href: "https://padelculture.uk/",
    colorLogo: true,
  },
  {
    src: "/featured/underscored.png",
    alt: "Underscored",
    href: "https://underscored.uk/",
    colorLogo: true,
  },
];
