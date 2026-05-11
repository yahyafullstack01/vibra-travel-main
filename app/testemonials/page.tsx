import { ReadyAdventure } from "@/components/ReadyAdventure";
import { Testemonials } from "@/components/Testemonials";

export default function TestemonialsPage() {
  return (
    <>
      <Testemonials />
      <ReadyAdventure variant="orange" hideDescription />
    </>
  );
}
