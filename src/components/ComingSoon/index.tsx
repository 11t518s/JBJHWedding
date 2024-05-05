"use client";

import { ShowWeddingText } from "@/animations";
import { CountDown } from "./CountDown";
import globalStyles from "@/styles/global.module.css";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";
import useCountDown from "@/hooks/useCountdown";
import dayjs from "dayjs";

export const ComingSoon = () => {
  const { isOver } = useCountDown({
    standardDate: dayjs(),
    targetDate: dayjs("2024-05-18T17:00:00"),
  });

  return (
    <div className={globalStyles.sectionContainer}>
      <ShowWeddingText
        text={isOver ? ["Thank you", "for Coming"] : "Coming Soon"}
        variant="black"
        color="darkOrange"
        size={40}
        el="h2"
      />

      <ShowBottomUPComponent>
        <CountDown />
      </ShowBottomUPComponent>
      <ShowBottomUPComponent position="top">
        <img
          src="/ComingSoon.png"
          style={{
            marginTop: "4px",
            width: "calc(100vw - 40px)",
            maxWidth: "680px",
          }}
        />
      </ShowBottomUPComponent>
    </div>
  );
};
