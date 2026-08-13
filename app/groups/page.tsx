import { GroupsOverview } from "@/components/GroupsOverview/GroupsOverview";
import { GroupsPresentation } from "@/components/GroupsPresentation/GroupsPresentation";
import { Images } from "@/components/Images/Images";
import { MakeItYours } from "@/components/MakeItYours/MakeItYours";
import { ReadyAdventure } from "@/components/ReadyAdventure/ReadyAdventure";
import { Schedule } from "@/components/Schedule/Schedule";
import { TestemonialsPreview } from "@/components/TestemonialsPreview/TestemonialsPreview";

export default function GroupsPage() {
  return (
    <div>
      <GroupsPresentation />
      <GroupsOverview />
      <Images variant="groups" />
      <MakeItYours />
      <Schedule />
      <TestemonialsPreview />
      <ReadyAdventure variant="orange" />
    </div>
  );
}
