import { images } from "@/constants";
import { GeneralModal } from "@/design-system/Modals";
import { SlideShow } from "@/design-system/SlideShow";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ModalProps = {
  index: number;
  layoutId: string;
  onDissmiss: () => void;
};

export const Modal = ({ index, layoutId, onDissmiss }: ModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(index);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === null) return 0;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  return (
    <GeneralModal layoutId={layoutId} onDismissClick={onDissmiss}>
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          // initial={{ opacity: 0, x: "100%" }}
          // exit={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: "100%", position: "absolute" }}
          drag="x"
          // dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={(event, info) => {
            if (info.offset.x > 50) {
              handlePrev();
            } else if (info.offset.x < -50) {
              handleNext();
            }
          }}
        />
      </AnimatePresence>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <button onClick={handlePrev}>이전</button>
        <button onClick={handleNext}>다음</button>
      </div>
    </GeneralModal>
  );
};
