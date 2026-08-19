import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { ContactPresentation } from "@/components/ContactPresentation/ContactPresentation";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Vibra Travel. Plan your padel trip to Spain — we'll design a bespoke itinerary for your group, school, or team.",
  openGraph: {
    title: "Contact Vibra Travel",
    description:
      "Plan your padel trip to Spain — reach out and we'll craft the perfect experience.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactPresentation />
      <ContactForm />
    </>
  );
}
