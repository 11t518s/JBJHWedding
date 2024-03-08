import { ShowWeddingText } from "@/animations";
import styles from "@/styles/global.module.css";
import { Subway } from "./Subway";
import { Bus } from "./Bus";
import { Parking } from "./Parking";
import { Map } from "./Map";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";

export const Location = () => {
  return (
    <div className={styles.contentContainer}>
      <ShowWeddingText
        text="Location"
        variant="black"
        color="darkOrange"
        size={48}
        el="h2"
      />

      <ShowBottomUPComponent position="top">
        <Map />
      </ShowBottomUPComponent>

      <ShowBottomUPComponent>
        <Subway />
      </ShowBottomUPComponent>

      <ShowBottomUPComponent>
        <Bus />
      </ShowBottomUPComponent>

      <ShowBottomUPComponent>
        <Parking />
      </ShowBottomUPComponent>
    </div>
  );
};
