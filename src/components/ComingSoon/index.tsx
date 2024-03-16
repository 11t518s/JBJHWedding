import { ShowWeddingText } from "@/animations";
import { CountDown } from "./CountDown";
import globalStyles from "@/styles/global.module.css";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";

export const ComingSoon = () => {
  return (
    <div className={globalStyles.sectionContainer}>
      <ShowWeddingText
        text="Coming Soon"
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
