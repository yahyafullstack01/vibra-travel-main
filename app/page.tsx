import type { Metadata } from "next";
import { GroupsSteps } from "@/components/GroupsSteps/GroupsSteps";

export const metadata: Metadata = {
  title: "Padel Holidays in Spain",
  description:
    "Personalised padel holidays in Spain for groups, schools, and businesses. Combine world-class court time with authentic Spanish culture in Barcelona, Sevilla, and Valencia.",
  openGraph: {
    title: "Vibra Travel — Padel Holidays in Spain",
    description:
      "Personalised padel holidays in Spain — combining unforgettable court time with authentic Spanish experiences.",
  },
};
import { HomeAbout } from "@/components/HomeAbout/HomeAbout";
import { HomeDestinations } from "@/components/HomeDestinations/HomeDestinations";
import { HomePresentation } from "@/components/HomePresentation/HomePresentation";
import { FeaturedOn } from "@/components/FeaturedOn/FeaturedOn";
import { Images } from "@/components/Images/Images";
import { MoreThanPadel } from "@/components/MoreThanPadel/MoreThanPadel";
import { ReadyAdventure } from "@/components/ReadyAdventure/ReadyAdventure";
import { TestemonialsPreview } from "@/components/TestemonialsPreview/TestemonialsPreview";
import { PartnerPromos } from "@/components/PartnerPromos/PartnerPromos";
import { UpcomingTrips } from "@/components/UpcomingTrips/UpcomingTrips";

export default function HomePage() {
  return (
    <div>
      <HomePresentation />
      <FeaturedOn />
      <MoreThanPadel />
      <UpcomingTrips />
      <HomeAbout />
      <HomeDestinations />
      <PartnerPromos />
      <TestemonialsPreview />
      <Images />
      <GroupsSteps />
      <ReadyAdventure />
    </div>
  );
}
