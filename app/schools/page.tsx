import { AudienceIntro } from "@/components/AudienceIntro";
import { ChooseYourActivities } from "@/components/ChooseYourActivities";
import { Destinations } from "@/components/Destinations";
import { SchoolsPackagesSection } from "@/components/SchoolsPackagesSection";
import { SchoolsPresentation } from "@/components/SchoolsPresentation";
import { SchoolsSchedule } from "@/components/SchoolsSchedule";
import { TestemonialsPreview } from "@/components/TestemonialsPreview";

export default function SchoolsPage() {
  return (
    <div>
      <SchoolsPresentation />
      <AudienceIntro audience="schools" />
      <SchoolsPackagesSection />
      <ChooseYourActivities />
      <Destinations />
      <SchoolsSchedule />
      <TestemonialsPreview />
    </div>
  );
}
