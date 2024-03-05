import { ShowWeddingText } from "@/animations";
import { CountDown } from "./CountDown";
import globalStyles from "@/styles/global.module.css";

export const ComingSoon = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={globalStyles.contentContainer}>
        <div>
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

          <CountDown />
        </div>
      </div>
      <img src="/countDown.png" />
    </div>
  );
};
