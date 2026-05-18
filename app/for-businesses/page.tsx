import { AllInclusive } from "@/components/AllInclusive";
import { CorporatePresentation } from "@/components/CorporatePresentation";
import { ForEveryTeam } from "@/components/ForEveryTeam";
import { Images } from "@/components/Images";
import { MakeItYours } from "@/components/MakeItYours";
import { ReadyTeam } from "@/components/ReadyTeam";

export default function ForBusinessesPage() {
  return (
    <div>
      <CorporatePresentation />
      <ForEveryTeam />
      <Images />
      <AllInclusive />
      <MakeItYours />
      <ReadyTeam />
    </div>
  );
}
