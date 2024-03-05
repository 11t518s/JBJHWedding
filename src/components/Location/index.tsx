import { ShowWeddingText } from "@/animations";
import { P, colors } from "@/design-system";
import styles from "./location.module.css";
import { Subway } from "./Subway";
import { Bus } from "./Bus";
import { Parking } from "./Parking";
import { Map } from "./Map";

export const Location = () => {
  return (
    <>
      <ShowWeddingText
        text="Location"
        variant="black"
        color="darkOrange"
        size={48}
        el="h2"
      />

      <Map />

      <Subway />

      <Bus />

      <Parking />
    </>
  );
};
