import { ShowWeddingText } from "@/animations";
import { CountDown } from "./CountDown";

export const ComingSoon = () => {
  return (
    <>
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
    </>
  );
};
