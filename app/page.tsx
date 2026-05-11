import { GroupsSteps } from "@/components/GroupsSteps";
import { HomePresentation } from "@/components/HomePresentation";
import { Images } from "@/components/Images";
import { MoreThanPadel } from "@/components/MoreThanPadel";
import { ReadyAdventure } from "@/components/ReadyAdventure";

export default function HomePage() {
  return (
    <div>
      <HomePresentation />
      <MoreThanPadel />
      <Images />
      <GroupsSteps />
      <ReadyAdventure />
    </div>
  );
}
