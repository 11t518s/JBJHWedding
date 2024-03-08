import { ShowWeddingText } from "@/animations";
import Image from "next/image";

export const Intro = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <Image
        src="/Cover.png"
        alt="배경"
        fill
        priority
        quality={100}
        style={
          {
            // objectFit: "cover",
          }
        }
      />
      <div
        style={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "32px",
          width: "100vw",
          maxWidth: "720px",
        }}
      >
        <ShowWeddingText
          text="百年諧老"
          variant="black"
          color="darkOrange"
          size={80}
          el="h1"
          moveY
        />

        <ShowWeddingText
          text="May 18th, 2024"
          variant="black"
          color="darkOrange"
          size={18}
          el="p"
          moveY
        />
      </div>
    </div>
  );
};
