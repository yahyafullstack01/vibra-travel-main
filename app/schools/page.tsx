import { AudienceIntro } from "@/components/AudienceIntro/AudienceIntro";
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
