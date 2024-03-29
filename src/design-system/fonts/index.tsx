import {
  FontSizeKey,
  FontVariantKey,
  fontSize,
  fontVariant,
} from "./constants";
import { ColorKey, colors } from "../colors";
import { CSSProperties, ReactNode } from "react";

type Props = {
  variant: FontVariantKey;
  color: ColorKey;
  children: ReactNode;
  size: FontSizeKey;
  style?: CSSProperties;
};

export const P = ({ variant, color, children, size, style }: Props) => {
  return (
    <p
      style={{ color: colors[color], ...fontSize[size], ...style }}
      className={fontVariant[variant].className}
    >
      {children}
    </p>
  );
};

export const H1 = ({ variant, color, children, size, style }: Props) => {
  return (
    <h1
      style={{ color: colors[color], ...fontSize[size], ...style }}
      className={fontVariant[variant].className}
    >
      {children}
    </h1>
  );
};

export const H2 = ({ variant, color, children, size, style }: Props) => {
  return (
    <h2
      style={{ color: colors[color], ...fontSize[size], ...style }}
      className={fontVariant[variant].className}
    >
      {children}
    </h2>
  );
};

export const H3 = ({ variant, color, children, size, style }: Props) => {
  return (
    <h3
      style={{ color: colors[color], ...fontSize[size], ...style }}
      className={fontVariant[variant].className}
    >
      {children}
    </h3>
  );
};
