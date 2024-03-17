import { ShowWeddingText } from "@/animations";
import styles from "@/styles/global.module.css";
import { Subway } from "./Subway";
import { Bus } from "./Bus";
import { Parking } from "./Parking";
import { Map } from "./Map";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";
import { P } from "@/design-system";

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

      <ShowBottomUPComponent>
        <P
          variant="medium"
          color="dark"
          size={18}
          style={{
            textAlign: "center",
          }}
        >
          아펠가모 공덕 7층 라로브홀
        </P>

        <P
          variant="regular"
          color="medium"
          size={16}
          style={{
            textAlign: "center",
          }}
        >
          서울 마포구 마포대로 92 효성해링턴스퀘어 B동
        </P>
      </ShowBottomUPComponent>

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
