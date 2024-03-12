import { P, colors } from "@/design-system";
import styles from "../location.module.css";

export const Bus = () => {
  return (
    <div className={styles.sectionContainer}>
      <P
        variant="medium"
        color="black"
        size={18}
        style={{
          paddingBottom: 8,
        }}
      >
        버스
      </P>
      <P variant="regular" color="black" size={16}>
        공덕역 7, 10번 출구 도보 2분
      </P>
      <div className={styles.busNumberContainer}>
        <div
          className={styles.circle}
          style={{ backgroundColor: colors.subBlue }}
        />
        <P variant="regular" color="black" size={16}>
          160, 260, 600
        </P>
      </div>
      <div className={styles.busNumberContainer}>
        <div
          className={styles.circle}
          style={{ backgroundColor: colors.subGreen }}
        />
        <P variant="regular" color="black" size={16}>
          7013A, 7013B, 7611
        </P>
      </div>
    </div>
  );
};
