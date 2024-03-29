"use client";

import { ColorKey, colors } from "@/design-system/colors";
import {
  FontSizeKey,
  FontVariantKey,
  fontSize,
  fontVariant,
} from "@/design-system/fonts/constants";
import { Variant, motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  once?: boolean;
  repeatDelay?: number;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };

  variant: FontVariantKey;
  color: ColorKey;
  size: FontSizeKey;

  moveY?: boolean;
};

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const ShowWeddingText = ({
  text,
  el: Wrapper = "p",
  once,
  repeatDelay,
  animation = defaultAnimations,
  variant,
  color,
  size,
  moveY = false,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { amount: 0.5, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      controls.start("visible");
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start("hidden");
          controls.start("visible");
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <Wrapper
      style={{ color: colors[color], ...fontSize[size] }}
      className={fontVariant[variant].className}
    >
      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: "0",
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
      >
        {textArray.join(" ")}
      </span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
        aria-hidden
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {textArray.map((line, lineIndex) => (
          <span style={{ display: "block" }} key={`${line}-${lineIndex}`}>
            {line.split(" ").map((word, wordIndex) => (
              <span
                style={{ display: "inline-block" }}
                key={`${word}-${wordIndex}`}
              >
                {wordIndex !== 0 && (
                  <span style={{ display: "inline-block" }}>&nbsp;</span>
                )}
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    style={{ display: "inline-block" }}
                    variants={{
                      ...animation,
                      hidden: { ...animation.hidden, y: moveY ? size / 3 : 0 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
