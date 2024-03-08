import { ShowWeddingText } from "@/animations";
import { P } from "@/design-system";
import styles from "./invitation.module.css";
import globalStyles from "@/styles/global.module.css";
import { brideAndGroom } from "./constants";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";

export const Invitation = () => {
  return (
    <div className={styles.container}>
      <div className={globalStyles.contentContainer}>
        <div className={styles.text}>
          <ShowWeddingText
            text="Invitation"
            variant="black"
            color="darkOrange"
            size={48}
            el="h2"
          />

          <ShowBottomUPComponent>
            <P variant="regular" color="black" size={16}>
              1,000일 동안 서로에 대해 알아가며
            </P>

            <P variant="regular" color="black" size={16}>
              평생을 함께할 인연임을 확신하게 되었습니다.
            </P>

            <P variant="regular" color="black" size={16}>
              이제 부부의 연으로 백년해로를 이루려 합니다.
            </P>

            <P variant="regular" color="black" size={16}>
              평생을 좋은 남편, 좋은 아내로 살겠습니다.
            </P>

            <P variant="regular" color="black" size={16}>
              그 시작의 자리에 함께해 주시기를 바랍니다.
            </P>
          </ShowBottomUPComponent>
        </div>

        <ShowBottomUPComponent>
          {brideAndGroom.map((item) => (
            <div className={styles.brideAndGroom} key={item.name}>
              <P variant="regular" color="black" size={16}>
                {item.parent}
              </P>

              <div className={styles.dotContainer}>
                {Array.from({ length: item.dot }).map((item, index) => (
                  <div key={index} className={styles.dot}>
                    {" "}
                  </div>
                ))}
              </div>

              <P variant="black" color="black" size={24}>
                {item.name}
              </P>
            </div>
          ))}
        </ShowBottomUPComponent>
      </div>

      <ShowBottomUPComponent>
        <img
          src="/introduce.png"
          style={{
            width: "100vw",

            maxWidth: "720px",
          }}
        />
      </ShowBottomUPComponent>
    </div>
  );
};
