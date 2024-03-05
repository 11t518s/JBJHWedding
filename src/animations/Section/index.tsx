"use client";

import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";
import styles from "@/styles/global.module.css";

type SectionProps = {
  children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  // const { ref, y } = useParallax({ distance: 300 });
  // console.log(y);

  const ref = useRef<any>();
  return (
    <section className={styles.screen}>
      <div ref={ref}>{children}</div>
    </section>
  );
};
