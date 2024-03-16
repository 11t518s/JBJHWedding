import { ShowWeddingText } from "@/animations";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";
import { P } from "@/design-system";
import styles from "@/styles/global.module.css";

export const Intro = () => {
  return (
    <div
      className={styles.sectionContainer}
      style={{
        gap: 20,
      }}
    >
      {/* 중앙정ㄹ렬 */}
      <ShowWeddingText
        text={["Wedding"]}
        variant="black"
        color="darkOrange"
        size={64}
        el="h1"
        moveY
      />

      <ShowWeddingText
        text={["Invitation"]}
        variant="black"
        color="darkOrange"
        size={64}
        el="h1"
        moveY
      />

      <ShowWeddingText
        text="May 18th, 2024"
        variant="bold"
        color="darkOrange"
        size={18}
        el="p"
        moveY
      />
      <ShowBottomUPComponent position="top">
        <img
          src="/Cover.png"
          alt="배경"
          style={{
            width: "calc(100vw - 40px)",
            maxWidth: "720px",
            marginTop: 4,
          }}
        />
      </ShowBottomUPComponent>

      <ShowBottomUPComponent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <P variant="medium" color="black" size={16}>
            1,000일 동안 서로에 대해 알아가며
          </P>

          <P variant="medium" color="black" size={16}>
            평생을 함께할 인연임을 확신하게 되었습니다.
          </P>

          <P variant="medium" color="black" size={16}>
            이제 부부의 연으로 백년해로를 이루려 합니다.
          </P>

          <P variant="medium" color="black" size={16}>
            평생을 좋은 남편, 좋은 아내로 살겠습니다.
          </P>

          <P variant="medium" color="black" size={16}>
            그 시작의 자리에 함께해 주시기를 바랍니다.
          </P>
        </div>
      </ShowBottomUPComponent>
    </div>
  );
};
