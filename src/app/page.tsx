import { Intro } from "@/components";
import "reset-css";
import { Invitation } from "@/components/Invitation";
import { ComingSoon } from "@/components/ComingSoon";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { WeddingGift } from "@/components/WeddingGift";
import { PreventPinchZoom } from "./PreventPinchZoom";
import styles from "@/styles/global.module.css";
import { colors } from "@/design-system";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.sectionContainer}>
      <Intro />

      <hr
        style={{
          height: 2,
          width: "100vw",
          maxWidth: "720px",
          backgroundColor: colors.black,
          margin: 0,
          padding: 0,
        }}
      />

      <Invitation />

      <hr
        style={{
          height: 2,
          width: "100vw",
          maxWidth: "720px",
          backgroundColor: colors.black,
          margin: 0,
          padding: 0,
        }}
      />

      <ComingSoon />

      <hr
        style={{
          height: 2,
          width: "100vw",
          maxWidth: "720px",
          backgroundColor: colors.black,
          margin: 0,
          padding: 0,
        }}
      />

      <Gallery />

      <hr
        style={{
          height: 2,
          width: "100vw",
          maxWidth: "720px",
          backgroundColor: colors.black,
          margin: 0,
          padding: 0,
        }}
      />
      <Location />

      <hr
        style={{
          height: 2,
          width: "100vw",
          maxWidth: "720px",
          backgroundColor: colors.black,
          margin: 0,
          padding: 0,
        }}
      />
      <WeddingGift />

      <Footer />
      <PreventPinchZoom />
    </div>
  );
}
