import { AllInclusive } from "@/components/AllInclusive";
import { AudienceIntro } from "@/components/AudienceIntro";
import { CorporatePresentation } from "@/components/CorporatePresentation";
import { ForEveryTeam } from "@/components/ForEveryTeam";
import { Images } from "@/components/Images";
import { MakeItYours } from "@/components/MakeItYours";
import { ReadyTeam } from "@/components/ReadyTeam";
import { TestemonialsPreview } from "@/components/TestemonialsPreview";

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
