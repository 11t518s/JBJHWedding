"use client";

import { ShowWeddingText } from "@/animations";
import { H3, P, colors } from "@/design-system";
import { Accordion } from "@/design-system/Accordion";
import { Info } from "./Info";
import { brideFamily, groomFamily } from "./constants";
import styles from "@/styles/global.module.css";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";
import useCountDown from "@/hooks/useCountdown";
import dayjs from "dayjs";

export const WeddingGift = () => {
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
      <div
        className={styles.sectionContainer}
        style={{
          gap: "20px",
          paddingBottom: "20px",
        }}
      >
        <ShowWeddingText
          text="Account"
          variant="black"
          color="darkOrange"
          size={38}
          el="h2"
        />

        <ShowBottomUPComponent position="top">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: 12,
              }}
            >
              <P variant="medium" color="black" size={16}>
                전해주시는 마음은 소중하게 간직하여
              </P>
              <P variant="medium" color="black" size={16}>
                좋은 부부의 모습으로 보답하겠습니다.
              </P>
            </div>

            <Accordion
              initiallyOpen={false}
              header={
                <H3 variant="medium" size={18} color="black">
                  신랑측 계좌번호
                </H3>
              }
              content={
                <div>
                  {groomFamily.map((item) => (
                    <Info
                      key={item.name}
                      account={item.account}
                      name={item.name}
                      role={item.role}
                    />
                  ))}
                </div>
              }
            />

            <Accordion
              initiallyOpen={false}
              header={
                <H3 variant="medium" size={18} color="black">
                  신부측 계좌번호
                </H3>
              }
              content={
                <div>
                  {brideFamily.map((item) => (
                    <Info
                      key={item.name}
                      account={item.account}
                      name={item.name}
                      role={item.role}
                    />
                  ))}
                </div>
              }
            />
          </div>
        </ShowBottomUPComponent>
      </div>
    </>
  );
};
