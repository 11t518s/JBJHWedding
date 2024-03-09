import { Section } from "@/animations/Section";
import { Intro } from "@/components";
import "reset-css";
import { Invitation } from "@/components/Invitation";
import { ComingSoon } from "@/components/ComingSoon";
import { Gallery } from "@/components/Gallery";
import { Location } from "@/components/Location";
import { WeddingGift } from "@/components/WeddingGift";
import { PreventPinchZoom } from "./PreventPinchZoom";

export default function Home() {
  return (
    <>
      <Intro />

      <Invitation />

      <ComingSoon />

      <Gallery />

      <Location />

      <WeddingGift />

      <PreventPinchZoom />
    </>
  );
}
