import { ShowWeddingText } from "@/animations";
import { H3, P, colors } from "@/design-system";
import { Accordion } from "@/design-system/Accordion";
import { Info } from "./Info";
import { brideFamily, groomFamily } from "./constants";
import { Share } from "./Share";
import styles from "@/styles/global.module.css";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";

export const WeddingGift = () => {
  return (
    <div className={styles.contentContainer}>
      <ShowWeddingText
        text={["신랑 & 신부에게", "마음 전하기"]}
        variant="black"
        color="darkOrange"
        size={38}
        el="h2"
      />

      <ShowBottomUPComponent position="top">
        <P variant="regular" color="black" size={16}>
          축복의 의미로 축의금을 전달해보세요.
        </P>

        <hr
          style={{
            backgroundColor: colors.black,
            height: 1,
            width: "100%",
            margin: "20px 0",
          }}
        />

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

        <hr
          style={{
            backgroundColor: colors.black,
            height: 1,
            width: "100%",
            margin: "20px 0",
          }}
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
        <hr
          style={{
            backgroundColor: colors.black,
            height: 1,
            width: "100%",
            margin: "20px 0",
          }}
        />
      </ShowBottomUPComponent>

      <ShowBottomUPComponent position="top">
        <Share />
      </ShowBottomUPComponent>
    </div>
  );
};
