export type PartnerPromo = {
  id: string;
  logo: string;
  logoDark?: string;
  href: string;
};

/** Partners with active promo codes. Copy and labels live in i18n (`partnerPromos.partners`). */
export const partnerPromos: PartnerPromo[] = [
  {
    id: "deite",
    logo: "/featured/deite.png?v=transparent",
    logoDark: "/featured/deite-light.png?v=transparent",
    href: "https://deite.co.uk/discount/VIBRA10",
  },
  {
    id: "raquex",
    logo: "/featured/raquex.png?v=tagline",
    logoDark: "/featured/raquex-light.png",
    href: "https://www.raquex.com/discount/VIBRATRAVEL10",
  },
  {
    id: "preserva",
    logo: "/featured/preserva.png?v=nobg",
    logoDark: "/featured/preserva-light.png?v=nobg",
    href: "https://www.preserva.co.uk/discount/VIBRA10",
  },
  {
    id: "underscored",
    logo: "/featured/underscored.png",
    logoDark: "/featured/underscored-light.png",
    href: "https://underscored.uk/",
  },
  {
    id: "padelPlay",
    logo: "/featured/padel-play.png",
    logoDark: "/featured/padel-play-light.png",
    href: "https://www.padelplay.ai/",
  },
  {
    id: "courtero",
    logo: "/featured/courtero.png",
    logoDark: "/featured/courtero-light.png",
    href: "https://courtero.com/",
  },
  {
    id: "namethatball",
    logo: "/featured/namethatball.png?v=2026",
    logoDark: "/featured/namethatball-light.png?v=2026",
    href: "https://namethatball.co.uk/",
  },
  {
    id: "quantumBalls",
    logo: "/featured/quantum-balls.png",
    logoDark: "/featured/quantum-balls-light.png",
    href: "https://quantumpadel.co.uk/",
  },
];
