import { AllInclusive } from "@/components/AllInclusive/AllInclusive";
import { AudienceIntro } from "@/components/AudienceIntro/AudienceIntro";
import { CorporatePresentation } from "@/components/CorporatePresentation/CorporatePresentation";
import { ForEveryTeam } from "@/components/ForEveryTeam/ForEveryTeam";
import { Images } from "@/components/Images/Images";
import { MakeItYours } from "@/components/MakeItYours/MakeItYours";
import { ReadyTeam } from "@/components/ReadyTeam/ReadyTeam";
import { TestemonialsPreview } from "@/components/TestemonialsPreview/TestemonialsPreview";

export default function ForBusinessesPage() {
  return (
    <div>
      <CorporatePresentation />
      <AudienceIntro audience="business" />
      <ForEveryTeam />
      <Images />
      <AllInclusive />
      <MakeItYours />
      <TestemonialsPreview />
      <ReadyTeam />
    </div>
  );
}
