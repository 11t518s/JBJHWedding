import { P } from "@/design-system";
import styles from "../location.module.css";

export const Parking = () => {
  return (
    <div className={styles.sectionContainer}>
      {" "}
      <P
        variant="medium"
        color="black"
        size={18}
        style={{
          paddingBottom: 8,
        }}
      >
        주차
      </P>
      <P variant="regular" color="black" size={16}>
        2시간 무료 주차
      </P>
      <P
        variant="regular"
        color="medium"
        size={16}
        style={{
          paddingBottom: 4,
        }}
      >
        (건물 내 6, 7층 / 만차 시 외부 주차장 이용)
      </P>
      <P variant="regular" color="black" size={16}>
        안내데스크에서 주차권 수령
      </P>
    </div>
  );
};
