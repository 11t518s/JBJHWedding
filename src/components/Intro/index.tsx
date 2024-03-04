import { ShowWeddingText } from "@/animations";

export const Intro = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src="/BG_img.png" />
      </div>
      <div
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
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
      </div>
    </div>
  );
};
