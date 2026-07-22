export type UpcomingTripSection = {
  title: string;
  items: string[];
};

export type UpcomingTrip = {
  title: string;
  location: string;
  dateFrom: string;
  dateTo: string;
  price: string;
  deposit: string;
  image: string;
  imageAlt: string;
  href: string;
  sections: UpcomingTripSection[];
};
