import { P, colors } from "@/design-system";
import styles from "../location.module.css";

export const Subway = () => {
  return (
    <div>
      <P
        variant="medium"
        color="black"
        size={18}
        style={{
          paddingBottom: 8,
        }}
      >
        지하철
      </P>
      <div
        className={styles.circleContainer}
        style={{
          paddingBottom: 4,
        }}
      >
        <div
          className={styles.circleWithText}
          style={{ backgroundColor: colors.subBrown }}
        >
          <P variant="regular" color="white" size={12}>
            6
          </P>
        </div>
        <div
          className={styles.circleWithText}
          style={{ backgroundColor: colors.subPurple }}
        >
          <P variant="regular" color="white" size={12}>
            5
          </P>
        </div>

        <div
          className={styles.circleWithText}
          style={{ backgroundColor: colors.subSkyBlue }}
        >
          <P variant="regular" color="white" size={12}>
            공항
          </P>
        </div>
        <div
          className={styles.circleWithText}
          style={{ backgroundColor: colors.subMint }}
        >
          <P variant="regular" color="white" size={12}>
            경의중앙
          </P>
        </div>
      </div>

      <P variant="regular" color="black" size={16}>
        공덕역 7, 10번 출구 도보 2분
      </P>
    </div>
  );
};
