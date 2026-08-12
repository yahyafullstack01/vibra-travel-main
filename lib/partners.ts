export type PartnerLogo = {
  src: string;
  alt: string;
  href: string;
  colorLogo?: boolean;
};

export const partnerLogos: PartnerLogo[] = [
  {
    src: "/featured/raquex.png",
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
];
