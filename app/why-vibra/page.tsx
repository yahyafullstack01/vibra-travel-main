import { ReadyAdventure } from "@/components/ReadyAdventure";
import { WhyVibraPresentation } from "@/components/WhyVibraPresentation";

export default function WhyVibraPage() {
  return (
    <>
      <WhyVibraPresentation />
      <ReadyAdventure variant="orange" hideDescription />
    </>
  );
}
