"use client";

import { ReactNode } from "react";
import styles from "@/styles/global.module.css";

type SectionProps = {
  children: ReactNode;
  isLast?: boolean;
};

export const Section = ({ children, isLast = false }: SectionProps) => {
  return (
    <section className={isLast ? styles.lastScreen : styles.screen}>
      {children}
    </section>
  );
};
