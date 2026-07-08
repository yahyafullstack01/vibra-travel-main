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
    src: "/featured/court-culture.svg",
    alt: "Court & Culture",
    href: "",
  },
  {
    src: "/featured/padel-hub.svg",
    alt: "Padel Hub",
    href: "",
  },
  {
    src: "/featured/spain-collective.svg",
    alt: "Spain Collective",
    href: "",
  },
  {
    src: "/featured/travel-circuit.svg",
    alt: "Travel Circuit",
    href: "",
  },
];
