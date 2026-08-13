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
    logo: "/featured/deite.png",
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
    logo: "/featured/preserva.png",
    href: "https://www.preserva.co.uk/discount/VIBRA10",
  },
  {
    id: "underscored",
    logo: "/featured/underscored.png",
    href: "https://underscored.uk/",
  },
  {
    id: "courtero",
    logo: "/featured/courtero.png",
    logoDark: "/featured/courtero-light.png",
    href: "https://courtero.com/",
  },
];
