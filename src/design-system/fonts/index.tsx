import stylex from "@stylexjs/stylex";
import { FontProviderKey, fontProvider } from "./constants";
import { ColorKey, colors } from "../colors";
import { ReactNode } from "react";

type Props = {
  variant: FontProviderKey;
  color: ColorKey;
  children: ReactNode;
};

export const P = ({ variant, color, children }: Props) => {
  return (
    <p
      {...stylex.props(colors[color])}
      className={fontProvider[variant].className}
    >
      {children}
    </p>
  );
};

export const H1 = ({ variant, color, children }: Props) => {
  return (
    <h1
      {...stylex.props(colors[color])}
      className={fontProvider[variant].className}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ variant, color, children }: Props) => {
  return (
    <h2
      {...stylex.props(colors[color])}
      className={fontProvider[variant].className}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ variant, color, children }: Props) => {
  return (
    <h3
      {...stylex.props(colors[color])}
      className={fontProvider[variant].className}
    >
      {children}
    </h3>
  );
};
