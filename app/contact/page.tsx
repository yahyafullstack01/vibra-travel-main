import { BuyMyTimeCalendar } from "@/components/BuyMyTimeCalendar/BuyMyTimeCalendar";
import { ContactForm } from "@/components/ContactForm/ContactForm";
import { ContactPresentation } from "@/components/ContactPresentation/ContactPresentation";

export default function ContactPage() {
  return (
    <>
      <ContactPresentation />
      <ContactForm />
      <BuyMyTimeCalendar />
    </>
  );
}
