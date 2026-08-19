import type { Metadata } from "next";
import { ReadyAdventure } from "@/components/ReadyAdventure/ReadyAdventure";
import { Testemonials } from "@/components/Testemonials/Testemonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Hear from our guests — real stories and videos from padel travellers who experienced Spain with Vibra Travel.",
  openGraph: {
    title: "Guest Testimonials | Vibra Travel",
    description:
      "Real reviews and video testimonials from Vibra Travel guests.",
  },
};

export default function TestemonialsPage() {
  return (
    <>
      <Testemonials />
      <ReadyAdventure variant="orange" hideDescription />
    </>
  );
}
