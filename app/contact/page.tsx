import { BuyMyTimeCalendar } from "@/components/BuyMyTimeCalendar";
import { ContactForm } from "@/components/ContactForm";
import { ContactPresentation } from "@/components/ContactPresentation";

export default function ContactPage() {
  return (
    <>
      <ContactPresentation />
      <ContactForm />
      <BuyMyTimeCalendar />
    </>
  );
}
