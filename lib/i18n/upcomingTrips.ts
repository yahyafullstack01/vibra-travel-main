export type UpcomingTripSection = {
  title: string;
  items: string[];
};

export type UpcomingTrip = {
  title: string;
  subtitle?: string;
  intro?: string[];
  location: string;
  dateFrom: string;
  dateTo: string;
  /** ISO date (YYYY-MM-DD) used to split previous vs upcoming */
  endsOn?: string;
  price: string;
  deposit: string;
  image: string;
  imageAlt: string;
  href: string;
  sections: UpcomingTripSection[];
};
