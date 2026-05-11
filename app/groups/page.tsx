import { GroupsPackagesSection } from "@/components/GroupsPackagesSection";
import { GroupsPresentation } from "@/components/GroupsPresentation";
import { MakeItYours } from "@/components/MakeItYours";
import { ReadyAdventure } from "@/components/ReadyAdventure";
import { Schedule } from "@/components/Schedule";

export default function GroupsPage() {
  return (
    <div>
      <GroupsPresentation />
      <GroupsPackagesSection />
      <MakeItYours />
      <Schedule />
      <ReadyAdventure variant="orange" />
    </div>
  );
}
