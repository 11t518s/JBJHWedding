import stylex from "@stylexjs/stylex";

export const colors = stylex.create({
  darkOrange: { color: "#FD2E00" },

  subGreen: { color: "#27AE60" },
  subBlue: { color: "#2F80ED" },
  subBrown: { color: "#B6500B" },
  subPurple: { color: "#8936E0" },
  subKkyBlue: { color: "#73B6E4" },
  subMint: { color: "#8CC4A5" },

  black: { color: "#000000" },
  dark: { color: "#333333" },
  medium: { color: "#828282" },
  light: { color: "#E0E0E0" },
  white: { color: "#ffffff" },
});

export type ColorKey = keyof typeof colors;
