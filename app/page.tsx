import { GroupsSteps } from "@/components/GroupsSteps/GroupsSteps";
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
