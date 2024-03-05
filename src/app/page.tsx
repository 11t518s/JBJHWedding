import { Section } from "@/animations/Section";
import { Intro } from "@/components";
import "reset-css";
import { Invitation } from "@/components/Invitation";
import { ComingSoon } from "@/components/ComingSoon";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { WeddingGift } from "@/components/WeddingGift";
import styles from "@/styles/global.module.css";
import { PreventPinchZoom } from "./PreventPinchZoom";

export default function Home() {
  return (
    <>
      <div className={styles.screenContainer} id="screenContainer">
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
        <Section isLast>
          <WeddingGift />
        </Section>
      </div>

      <PreventPinchZoom />
    </>
  );
}
