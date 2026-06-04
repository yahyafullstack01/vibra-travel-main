import { GroupsSteps } from "@/components/GroupsSteps/GroupsSteps";
import { HomeAbout } from "@/components/HomeAbout/HomeAbout";
import { HomePresentation } from "@/components/HomePresentation/HomePresentation";
import { FeaturedOn } from "@/components/FeaturedOn/FeaturedOn";
import { Images } from "@/components/Images/Images";
import { MoreThanPadel } from "@/components/MoreThanPadel/MoreThanPadel";
import { ReadyAdventure } from "@/components/ReadyAdventure/ReadyAdventure";
import { TestemonialsPreview } from "@/components/TestemonialsPreview/TestemonialsPreview";

export default function HomePage() {
  return (
    <div>
      <HomePresentation />
      <FeaturedOn />
      <MoreThanPadel />
      <HomeAbout />
      <TestemonialsPreview />
      <Images />
      <GroupsSteps />
      <ReadyAdventure />
    </div>
  );
}
