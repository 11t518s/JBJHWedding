import { NextFont } from "next/dist/compiled/@next/font";
import { Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";

export const black = Noto_Serif_KR({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});

export const bold = Noto_Serif_KR({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});

export const medium = Noto_Sans_KR({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const regular = Noto_Sans_KR({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const fontSize = {
  80: {
    fontSize: "80px",
    lineHeight: "100.8px",
  },
  48: {
    fontSize: "48px",
    LineHeight: "60.48px",
  },

  38: {
    fontSize: "38px",
    LineHeight: "47.88px",
  },

  24: {
    fontSize: "24px",
    lineHeight: "34.5px",
  },

  18: {
    fontSize: "18px",
    lineHeight: "28px",
  },

  16: {
    fontSize: "16px",
    lineHeight: "28px",
  },

  14: {
    fontSize: "14px",
    lineHeight: "20.27px",
  },

  12: {
    fontSize: "12px",
    lineHeight: "20px",
  },
} as const;

export type FontSizeKey = keyof typeof fontSize;

export const fontVariant: Record<
  "black" | "bold" | "medium" | "regular",
  NextFont
> = { black, bold, medium, regular };

export type FontVariantKey = keyof typeof fontVariant;
