"use client";

import { P } from "@/design-system";
import styles from "./comingSoon.module.css";
import useCountDown from "@/hooks/useCountdown";
import dayjs from "dayjs";

export const CountDown = () => {
  const { days, hours, minutes, seconds, isOver } = useCountDown({
    standardDate: dayjs(),
    targetDate: dayjs("2024-05-18T17:00:00"),
  });

  return (
    <>
      <div className={styles.countDownIntroTextContainer}>
        <P variant="regular" color="black" size={16}>
          정빈 & 정화의 결혼식이{" "}
        </P>

        <P variant="regular" color="darkOrange" size={16}>
          {` ${days}일 `}
        </P>

        <P variant="regular" color="black" size={16}>
          {isOver ? "지났습니다." : "남았습니다."}
        </P>
      </div>

      {!isOver && (
        <div className={styles.countDownContainer}>
          <div className={styles.countDown}>
            <P variant="black" color="black" size={48}>
              {String(days).padStart(2, "0")}
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
              {String(hours).padStart(2, "0")}
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
              {String(minutes).padStart(2, "0")}
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
      )}
    </>
  );
};
