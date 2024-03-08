import { ShowWeddingText } from "@/animations";
import { CountDown } from "./CountDown";
import globalStyles from "@/styles/global.module.css";
import { ShowBottomUPComponent } from "@/animations/ShowBottomUPComponent";

export const ComingSoon = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={globalStyles.contentContainer}>
        <ShowWeddingText
          text="Coming"
          variant="black"
          color="darkOrange"
          size={48}
          el="h2"
        />
        <ShowWeddingText
          text="Soon"
          variant="black"
          color="darkOrange"
          size={48}
          el="h2"
        />

        <ShowBottomUPComponent>
          <CountDown />
        </ShowBottomUPComponent>
      </div>
      <ShowBottomUPComponent position="top">
        <img
          src="/countDown.png"
          style={{
            width: "100vw",
            maxWidth: "720px",
          }}
        />
      </ShowBottomUPComponent>
    </div>
  );
};
