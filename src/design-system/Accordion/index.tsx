import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";

type AccordionProps = {
  initiallyOpen?: boolean;
  children: ReactNode;
};

export const Accordion = ({
  initiallyOpen = false,
  children,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
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
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
