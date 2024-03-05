import { Section } from "@/animations/Section";
import { Intro } from "@/components";
import "reset-css";
import { Invitation } from "@/components/Invitation";
import { ComingSoon } from "@/components/ComingSoon";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";

export default function Home() {
  return (
    <div>
      <Section>
        <Intro />
      </Section>

      <Section>
        <Invitation />
      </Section>

      <Section>
        <ComingSoon />
      </Section>

      <Section>
        <Gallery />
      </Section>

      <Section>
        <Location />
      </Section>
    </div>
  );
}
