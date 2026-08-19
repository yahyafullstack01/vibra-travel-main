import type { Metadata } from "next";
import { ReadyAdventure } from "@/components/ReadyAdventure/ReadyAdventure";
import { WhyVibraPresentation } from "@/components/WhyVibraPresentation/WhyVibraPresentation";

export const metadata: Metadata = {
  title: "Why Vibra Travel",
  description:
    "Built by people who live the Spanish padel life. Learn why Vibra Travel delivers unforgettable padel holidays across Spain.",
  openGraph: {
    title: "Why Vibra Travel — About Us",
    description:
      "Why groups, schools, and businesses trust Vibra Travel for padel trips in Spain.",
  },
};

export default function WhyVibraPage() {
  return (
    <>
      <WhyVibraPresentation />
      <ReadyAdventure variant="orange" hideDescription />
    </>
  );
}
