import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./modal.module.css";

type ModalProps = {
  children: ReactNode;
  layoutId: string;
  onDismissClick: () => void;
};

export const GeneralModal = ({
  children,
  layoutId,
  onDismissClick,
}: ModalProps) => {
  return (
    <motion.div
      onClick={onDismissClick}
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      exit={{ backgroundColor: "rgba(0,0,0,0)" }}
      className={styles.modalOverlay}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        layoutId={layoutId}
        className={styles.modalContainer}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
