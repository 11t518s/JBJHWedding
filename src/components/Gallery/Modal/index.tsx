import { images } from "@/constants";
import { P } from "@/design-system";
import { GeneralModal } from "@/design-system/Modals";
import Icons from "@/design-system/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type ModalProps = {
  index: number;
  layoutId: string;
  onDissmiss: () => void;
};

export const Modal = ({ index, layoutId, onDissmiss }: ModalProps) => {
  const [currentIndex, setCurrentIndex] = useState(index);
  const [directionX, setDirectionX] = useState("0");

  const handlePrev = () => {
    setDirectionX("-100%");
    setCurrentIndex((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setDirectionX("100%");
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
      <AnimatePresence initial={true}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            initial={{
              opacity: 0,
              x: directionX,
            }}
            width="100%"
            height="100%"
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            dragElastic={0.7}
            onDragEnd={(_, info) => {
              if (info.offset.x > 1) {
                handlePrev();
              } else if (info.offset.x < -1) {
                handleNext();
              }
            }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              padding: "10px",
            }}
          >
            <div onClick={handlePrev}>
              <Icons iconName="chevronLeft" />
            </div>
            <P variant="medium" color="white" size={16}>
              {currentIndex + 1}/{images.length}
            </P>

            <div onClick={handleNext}>
              <Icons iconName="chevronRight" />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </GeneralModal>
  );
};
