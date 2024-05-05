"use client";

import { P } from "@/design-system";
import styles from "./comingSoon.module.css";
import globalStyles from "@/styles/global.module.css";
import useCountDown from "@/hooks/useCountdown";
import dayjs from "dayjs";

export const CountDown = () => {
  const { days, hours, minutes, seconds, isOver } = useCountDown({
    // standardDate: dayjs("2024-05-18T17:00:00"),
    standardDate: dayjs(),
    targetDate: dayjs("2024-05-18T17:00:00"),
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px 0",
        gap: "2px",
      }}
    >
      {isOver ? null : (
        <div>
          <P size={18} variant="regular" color="dark">
            2024년 5월 18일 오후 5시
          </P>
        </div>
      )}

      <div className={styles.countDownIntroTextContainer}>
        <P variant="regular" color="medium" size={16}>
          정빈 & 정화의 결혼식이{" "}
        </P>

        <P variant="regular" color="darkOrange" size={16}>
          {` ${isOver ? days - 1 : days}일 `}
        </P>

        <P variant="regular" color="medium" size={16}>
          {isOver ? "지났습니다." : "남았습니다."}
        </P>
      </div>

      <div className={styles.countDownContainer}>
        <div className={styles.countDown}>
          <P variant="black" color="black" size={48}>
            {String(isOver ? days - 1 : days).padStart(2, "0")}
          </P>
          <P variant="regular" color="medium" size={14}>
            Days
          </P>
        </div>
        <div className={styles.countDown}>
          <P variant="black" color="black" size={48}>
            :
          </P>
        </div>

        <div className={styles.countDown}>
          <P variant="black" color="black" size={48}>
            {String(isOver ? hours - 1 : hours).padStart(2, "0")}
          </P>
          <P variant="regular" color="medium" size={14}>
            Hours
          </P>
        </div>

        <div className={styles.countDown}>
          <P variant="black" color="black" size={48}>
            :
          </P>
        </div>

        <div className={styles.countDown}>
          <P variant="black" color="black" size={48}>
            {String(isOver ? minutes - 1 : minutes).padStart(2, "0")}
          </P>
          <P variant="regular" color="medium" size={14}>
            Minutes
          </P>
        </div>

        <div className={styles.countDown}>
          <P variant="black" color="black" size={48}>
            :
          </P>
        </div>

        <div className={styles.countDown}>
          <P variant="black" color="black" size={48}>
            {String(seconds).padStart(2, "0")}
          </P>
          <P variant="regular" color="medium" size={14}>
            Seconds
          </P>
        </div>
      </div>
    </div>
  );
};
