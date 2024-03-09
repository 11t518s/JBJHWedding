"use client";

import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  motion,
  m,
} from "framer-motion";
import { ReactNode, useState } from "react";
import Icons from "../icons";

type AccordionProps = {
  initiallyOpen?: boolean;
  header: ReactNode;
  content: ReactNode;
};

export const Accordion = ({
  initiallyOpen = false,
  header,
  content,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  return (
    <>
      <motion.header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        initial={false}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {header}
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Icons iconName="chevronUp" />
          </motion.div>
        ) : null}
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Icons iconName="chevronDown" />
          </motion.div>
        ) : null}
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{
              overflow: "hidden",
            }}
          >
            {content}
          </motion.section>
        ) : null}
      </AnimatePresence>
    </>
  );
};
