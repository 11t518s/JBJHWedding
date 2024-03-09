"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type ShowBottomUPComponentProps = {
  children: ReactNode;
  repeatDelay?: number;
  once?: boolean;
  position?: "top" | "bottom";
};

export const ShowBottomUPComponent = ({
  children,
  repeatDelay,
  once = false,
  position = "bottom",
}: ShowBottomUPComponentProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once });

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const show = () => {
      timeout = setTimeout(async () => {
        await controls.start({
          y: 0,
          opacity: 1,
        });
        controls.start("visible");
      }, repeatDelay);
    };

    if (isInView) {
      show();
    } else {
      controls.start("hidden");
    }

    return () => clearTimeout(timeout);
  }, [isInView]);

  return (
    <motion.div
      ref={position === "top" ? ref : null}
      initial={"hidden"}
      animate={controls}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: {},
      }}
      aria-hidden
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 20,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
            },
          },
        }}
      >
        {children}
      </motion.div>
      <div ref={position === "bottom" ? ref : null} />
    </motion.div>
  );
};
