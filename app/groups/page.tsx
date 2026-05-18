import { GroupsPackagesSection } from "@/components/GroupsPackagesSection";
import { GroupsPresentation } from "@/components/GroupsPresentation";
import { MakeItYours } from "@/components/MakeItYours";
import { ReadyAdventure } from "@/components/ReadyAdventure";
import { Schedule } from "@/components/Schedule";
import { TestemonialsPreview } from "@/components/TestemonialsPreview";

export default function GroupsPage() {
  return (
    <div>
      <GroupsPresentation />
      <GroupsPackagesSection />
      <MakeItYours />
      <Schedule />
      <TestemonialsPreview />
      <ReadyAdventure variant="orange" />
    </div>
  );
}
