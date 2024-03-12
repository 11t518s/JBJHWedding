import { ShowWeddingText } from "@/animations";
import { P } from "@/design-system";
import styles from "./invitation.module.css";
import globalStyles from "@/styles/global.module.css";
import { brideAndGroom } from "./constants";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";

export const Invitation = () => {
  return (
    <div className={globalStyles.contentContainer}>
      <div className={styles.text}>
        <ShowWeddingText
          text="Groom & Bride"
          variant="black"
          color="darkOrange"
          size={40}
          el="h2"
        />
      </div>

      <ShowBottomUPComponent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <img
            src="/Groom.png"
            style={{
              width: "calc(100vw - 40px)",
              maxWidth: "680px",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <P variant="regular" color="black" size={16}>
              (故)이순남·김은숙의 차남
            </P>
            <P variant="black" color="black" size={24}>
              정빈
            </P>
          </div>
        </div>
      </ShowBottomUPComponent>

      <ShowBottomUPComponent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <img
            src="/Bride.png"
            style={{
              width: "calc(100vw - 40px)",
              maxWidth: "680px",
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <P variant="regular" color="black" size={16}>
              김명철·김금례의 장녀
            </P>
            <P variant="black" color="black" size={24}>
              정화
            </P>
          </div>
        </div>
      </ShowBottomUPComponent>
    </div>
  );
};
