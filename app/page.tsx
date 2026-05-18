import { GroupsSteps } from "@/components/GroupsSteps";
import { HomeAbout } from "@/components/HomeAbout";
import { HomePresentation } from "@/components/HomePresentation";
import { Images } from "@/components/Images";
import { MoreThanPadel } from "@/components/MoreThanPadel";
import { ReadyAdventure } from "@/components/ReadyAdventure";
import { TestemonialsPreview } from "@/components/TestemonialsPreview";

export default function HomePage() {
  return (
    <div>
      <HomePresentation />
      <MoreThanPadel />
      <HomeAbout />
      <TestemonialsPreview />
      <Images />
      <GroupsSteps />
      <ReadyAdventure />
    </div>
  );
}
