import { ChooseYourActivities } from "@/components/ChooseYourActivities";
import { Destinations } from "@/components/Destinations";
import { SchoolsPackagesSection } from "@/components/SchoolsPackagesSection";
import { SchoolsPresentation } from "@/components/SchoolsPresentation";
import { SchoolsSchedule } from "@/components/SchoolsSchedule";

export default function SchoolsPage() {
  return (
    <div>
      <SchoolsPresentation />
      <SchoolsPackagesSection />
      <ChooseYourActivities />
      <Destinations />
      <SchoolsSchedule />
    </div>
  );
}
