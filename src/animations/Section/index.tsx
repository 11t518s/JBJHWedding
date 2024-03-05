"use client";

import { ReactNode } from "react";
import styles from "@/styles/global.module.css";

type SectionProps = {
  children: ReactNode;
};

export const Section = ({ children }: SectionProps) => {
  return <section className={styles.screen}>{children}</section>;
};
