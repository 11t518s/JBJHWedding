"use client";

import { ShowWeddingText } from "@/animations";
import styles from "@/styles/global.module.css";
import { Subway } from "./Subway";
import { Bus } from "./Bus";
import { Parking } from "./Parking";
import { Map } from "./Map";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";
import { P, colors } from "@/design-system";
import useCountDown from "@/hooks/useCountdown";
import dayjs from "dayjs";

export const Location = () => {
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
      <div className={styles.contentContainer}>
        <ShowWeddingText
          text="Location"
          variant="black"
          color="darkOrange"
          size={48}
          el="h2"
        />

        <ShowBottomUPComponent>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
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
          </div>
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
    </>
  );
};
