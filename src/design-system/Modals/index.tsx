import { ReactNode } from "react";
import { motion } from "framer-motion";
import styles from "./modal.module.css";
import Icons from "../icons";

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
      initial={{
        backgroundColor: "rgba(0,0,0,0)",
      }}
      animate={{ backgroundColor: "rgba(0,0,0,0.8)" }}
      exit={{ backgroundColor: "rgba(0,0,0,0)" }}
      className={styles.modalOverlay}
      style={{
        maxWidth: window.innerWidth,
        maxHeight: window.innerHeight,
      }}
    >
      <div
        onClick={onDismissClick}
        style={{
          position: "absolute",
          top: 16,
          right: 20,
        }}
      >
        <Icons iconName="close" />
      </div>
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
