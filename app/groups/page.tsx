import type { Metadata } from "next";
import { GroupsOverview } from "@/components/GroupsOverview/GroupsOverview";

export const metadata: Metadata = {
  title: "Group Padel Trips in Spain",
  description:
    "Tailored padel group trips across Spain. Private groups, clubs, and friends — we design every detail from courts and coaching to culture and dining.",
  openGraph: {
    title: "Group Padel Trips in Spain — Vibra Travel",
    description:
      "Custom padel group holidays in Barcelona, Sevilla, and Valencia.",
  },
};
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
