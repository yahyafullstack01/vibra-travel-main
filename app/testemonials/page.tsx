import { ReadyAdventure } from "@/components/ReadyAdventure/ReadyAdventure";
import { Testemonials } from "@/components/Testemonials/Testemonials";

export default function TestemonialsPage() {
  return (
    <>
      <Testemonials />
      <ReadyAdventure variant="orange" hideDescription />
    </>
  );
}
