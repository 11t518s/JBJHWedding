import { Intro } from "@/components";
import "reset-css";
import { Invitation } from "@/components/Invitation";
import { ComingSoon } from "@/components/ComingSoon";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { WeddingGift } from "@/components/WeddingGift";
import { PreventPinchZoom } from "./PreventPinchZoom";
import { colors } from "@/design-system";
import { Footer } from "@/components/Footer";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Intro />

      <hr
        style={{
          height: 2,
          width: "100vw",
          maxWidth: "720px",
          backgroundColor: colors.black,
          margin: 0,
          padding: 0,
          border: 0,
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

          border: 0,
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

          border: 0,
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
          border: 0,
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
          border: 0,
        }}
      />
      <WeddingGift />

      <Suspense>
        <Footer />
      </Suspense>
      <PreventPinchZoom />
    </div>
  );
}
