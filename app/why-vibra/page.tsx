import { ReadyAdventure } from "@/components/ReadyAdventure/ReadyAdventure";
import { WhyVibraPresentation } from "@/components/WhyVibraPresentation/WhyVibraPresentation";

export default function WhyVibraPage() {
  return (
    <>
      <WhyVibraPresentation />
      <ReadyAdventure variant="orange" hideDescription />
    </>
  );
}
