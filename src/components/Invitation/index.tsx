"use client";

import { ShowWeddingText } from "@/animations";
import { P, colors } from "@/design-system";
import styles from "./invitation.module.css";
import globalStyles from "@/styles/global.module.css";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";
import useCountDown from "@/hooks/useCountdown";
import dayjs from "dayjs";

export const Invitation = () => {
  const { isOver } = useCountDown({
    // standardDate: dayjs("2024-05-18T17:00:00"),
    standardDate: dayjs(),
    targetDate: dayjs("2024-05-18T17:00:00"),
  });
  if (isOver) {
    return null;
  }

  return (
    <>
      <hr
        style={{
          height: 2,
          width: "100vw",
          maxWidth: "720px",
          backgroundColor: colors.black,
          margin: 0,
          padding: 0,
          border: 0,
        }}
      />
      <div className={globalStyles.contentContainer} style={{ gap: 24 }}>
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
          <img
            src="/GroomAndBride.png"
            style={{
              width: "calc(100vw - 40px)",
              maxWidth: "680px",
            }}
          />
        </ShowBottomUPComponent>

        <ShowBottomUPComponent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60vw",
                minWidth: 230,
                maxWidth: 300,
              }}
            >
              <P variant="regular" color="dark" size={16}>
                (故)이순남·김은숙의 차남
              </P>
              <P variant="medium" color="black" size={24}>
                정빈
              </P>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "60vw",
                minWidth: 230,
                maxWidth: 300,
              }}
            >
              <P variant="regular" color="dark" size={16}>
                김명철·김금례의 장녀
              </P>
              <P variant="medium" color="black" size={24}>
                정화
              </P>
            </div>
          </div>
        </ShowBottomUPComponent>
      </div>
    </>
  );
};
