import { AudienceIntro } from "@/components/AudienceIntro/AudienceIntro";
import { CorporateBeyondCourt } from "@/components/CorporateBeyondCourt/CorporateBeyondCourt";
import { CorporatePresentation } from "@/components/CorporatePresentation/CorporatePresentation";
import { CorporateSchedule } from "@/components/CorporateSchedule/CorporateSchedule";
import { ForEveryTeam } from "@/components/ForEveryTeam/ForEveryTeam";
import { Images } from "@/components/Images/Images";
import { ReadyTeam } from "@/components/ReadyTeam/ReadyTeam";
import { WhyCompaniesChoose } from "@/components/WhyCompaniesChoose/WhyCompaniesChoose";

export default function CorporatePage() {
  return (
    <div>
      <CorporatePresentation />
      <AudienceIntro audience="business" />
      <ForEveryTeam />
      <Images />
      <WhyCompaniesChoose />
      <CorporateBeyondCourt />
      <CorporateSchedule />
      <ReadyTeam />
    </div>
  );
}
