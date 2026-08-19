import type { Metadata } from "next";
import { AudienceIntro } from "@/components/AudienceIntro/AudienceIntro";

export const metadata: Metadata = {
  title: "Corporate Team Trips in Spain",
  description:
    "Team-building padel trips in Spain for businesses. Boost morale with court time, cultural experiences, and bespoke corporate hospitality.",
  openGraph: {
    title: "Corporate Team Trips in Spain — Vibra Travel",
    description:
      "Team-building padel trips and corporate hospitality in Spain.",
  },
};
import { CorporateBeyondCourt } from "@/components/CorporateBeyondCourt/CorporateBeyondCourt";
import { CorporatePresentation } from "@/components/CorporatePresentation/CorporatePresentation";
import { CorporateSchedule } from "@/components/CorporateSchedule/CorporateSchedule";
import { ForEveryTeam } from "@/components/ForEveryTeam/ForEveryTeam";
import { Images } from "@/components/Images/Images";
import { ReadyTeam } from "@/components/ReadyTeam/ReadyTeam";
import { TestemonialsPreview } from "@/components/TestemonialsPreview/TestemonialsPreview";
import { WhyCompaniesChoose } from "@/components/WhyCompaniesChoose/WhyCompaniesChoose";

export default function ForBusinessesPage() {
  return (
    <div>
      <CorporatePresentation />
      <AudienceIntro audience="business" />
      <ForEveryTeam />
      <Images variant="business" />
      <WhyCompaniesChoose />
      <CorporateBeyondCourt />
      <CorporateSchedule />
      <TestemonialsPreview />
      <ReadyTeam variant="orange" />
    </div>
  );
}
