import type { Metadata } from "next";
import { AudienceIntro } from "@/components/AudienceIntro/AudienceIntro";

export const metadata: Metadata = {
  title: "School Trips to Spain",
  description:
    "Active, educational school trips to Spain. Padel, Spanish language classes, cultural experiences and supervised group travel for schools and youth groups.",
  openGraph: {
    title: "School Trips to Spain — Vibra Travel",
    description:
      "Active, educational school trips combining padel, language, and culture in Spain.",
  },
};
import { ChooseYourActivities } from "@/components/ChooseYourActivities/ChooseYourActivities";
import { Destinations } from "@/components/Destinations/Destinations";
import { Images } from "@/components/Images/Images";
import { SchoolsPackagesSection } from "@/components/SchoolsPackagesSection/SchoolsPackagesSection";
import { SchoolsPresentation } from "@/components/SchoolsPresentation/SchoolsPresentation";
import { SchoolsSchedule } from "@/components/SchoolsSchedule/SchoolsSchedule";
import { TestemonialsPreview } from "@/components/TestemonialsPreview/TestemonialsPreview";

export default function SchoolsPage() {
  return (
    <div>
      <SchoolsPresentation />
      <AudienceIntro audience="schools" />
      <SchoolsPackagesSection />
      <Images variant="schools" />
      <ChooseYourActivities />
      <Destinations />
      <SchoolsSchedule />
      <TestemonialsPreview audience="schools" />
    </div>
  );
}
