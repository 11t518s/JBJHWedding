import { NextFont } from "next/dist/compiled/@next/font";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";

export const black = Noto_Serif_KR({
  weight: "900",
  display: "swap",
});

export const bold = Noto_Serif_KR({
  weight: "700",
  display: "swap",
});

export const medium = Noto_Sans_KR({
  weight: "500",
  display: "swap",
});

export const regular = Noto_Sans_KR({
  weight: "400",
  display: "swap",
});

export const fontProvider: Record<
  "black" | "bold" | "medium" | "regular",
  NextFont
> = { black, bold, medium, regular };

export type FontProviderKey = keyof typeof fontProvider;
