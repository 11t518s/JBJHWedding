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
        objectFit="cover"
      />
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
