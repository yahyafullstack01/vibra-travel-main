import { AllInclusive } from "@/components/AllInclusive/AllInclusive";
import { CorporatePresentation } from "@/components/CorporatePresentation/CorporatePresentation";
import { ForEveryTeam } from "@/components/ForEveryTeam/ForEveryTeam";
import { Images } from "@/components/Images/Images";
import { MakeItYours } from "@/components/MakeItYours/MakeItYours";
import { ReadyTeam } from "@/components/ReadyTeam/ReadyTeam";

export default function CorporatePage() {
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
