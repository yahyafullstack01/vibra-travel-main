import { GroupsPackagesSection } from "@/components/GroupsPackagesSection/GroupsPackagesSection";
import { GroupsPresentation } from "@/components/GroupsPresentation/GroupsPresentation";
import { MakeItYours } from "@/components/MakeItYours/MakeItYours";
import { ReadyAdventure } from "@/components/ReadyAdventure/ReadyAdventure";
import { Schedule } from "@/components/Schedule/Schedule";
import { TestemonialsPreview } from "@/components/TestemonialsPreview/TestemonialsPreview";

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
