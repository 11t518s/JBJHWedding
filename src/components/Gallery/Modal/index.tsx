import { images } from "@/constants";
import { P } from "@/design-system";
import { GeneralModal } from "@/design-system/Modals";
import Icons from "@/design-system/icons";
import { AnimatePresence, motion } from "framer-motion";
import { WheelEventHandler, useEffect, useState } from "react";

type ModalProps = {
  index: number;
  layoutId: string;
  onDissmiss: () => void;
};

export const Modal = ({ index, layoutId, onDissmiss }: ModalProps) => {
  const [showIndex, setShowIndex] = useState(false);
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

  useEffect(() => {
    setTimeout(() => {
      setShowIndex(true);
    }, 500);
  }, []);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.removeProperty("overflowY");
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.body.style.overflow = "hidden";
    document.body.addEventListener("wheel", handleScroll, { passive: false });
    document.body.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      document.body.style.overflow = "auto";
      document.body.removeEventListener("wheel", handleScroll);
      document.body.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

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
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            drag="x"
            style={{
              maxWidth: "720px",
              width: "100vw",
              objectFit: "contain",
            }}
            dragElastic={0.7}
            onDragEnd={(_, info) => {
              if (info.offset.x > 1) {
                handlePrev();
              } else if (info.offset.x < -1) {
                handleNext();
              }
            }}
          />
        </div>
      </AnimatePresence>
      {showIndex ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            bottom: 30,
            maxWidth: "720px",
            width: "100vw",
            position: "absolute",
          }}
        >
          <div onClick={handlePrev}>
            <Icons iconName="chevronLeft" />
          </div>
          <P
            variant="medium"
            color="white"
            size={16}
            style={{
              height: 24,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {currentIndex + 1}/{images.length}
          </P>

          <div onClick={handleNext}>
            <Icons iconName="chevronRight" />
          </div>
        </div>
      ) : null}
    </GeneralModal>
  );
};
