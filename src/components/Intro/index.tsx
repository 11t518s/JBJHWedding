import { ShowWeddingText } from "@/animations";
import { H1, P } from "@/design-system";

export const Intro = () => {
  return (
    <>
      <ShowWeddingText
        text="百年諧老"
        variant="black"
        color="darkOrange"
        size={80}
        el="h1"
      />

      <ShowWeddingText
        text="May 18th, 2024"
        variant="black"
        color="darkOrange"
        size={18}
        el="p"
      />
    </>
  );
};
