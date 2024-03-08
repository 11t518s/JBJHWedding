"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ShowBottomUPComponentProps = {
  children: ReactNode;
  duration?: number;
};

export const ShowBottomUPComponent = ({
  children,
  duration = 1,
}: ShowBottomUPComponentProps) => {
  const itemTransition = {
    duration,
  };
  return (
    <motion.div
      transition={itemTransition}
      initial={{
        y: 40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
    >
      {children}
    </motion.div>
  );
};
