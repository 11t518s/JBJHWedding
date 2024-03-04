"use client";

import { ShowWeddingText } from "@/animations";
import { useRef, useState } from "react";
import styles from "./gallery.module.css";
import { Modal } from "./Modal";
import { motion } from "framer-motion";
import { images } from "@/constants";

export const Gallery = () => {
  const [imageIndex, setImageIndex] = useState<null | number>(null);

  return (
    <>
      <ShowWeddingText
        text="Gallery"
        variant="black"
        color="darkOrange"
        size={48}
        el="h2"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 30,
        }}
      >
        {images.map((item, index) => (
          <motion.div
            className={styles.box}
            layoutId={String(index)}
            key={item}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            // style={{
            //   width: 100,
            //   height: 100,
            // }}
          >
            <img
              onClick={() => {
                setImageIndex(index);
              }}
              src={item}
            />
          </motion.div>
        ))}
      </div>
      <div style={{ position: "absolute" }}>
        {imageIndex !== null && (
          <Modal
            index={imageIndex}
            layoutId={String(imageIndex)}
            onDissmiss={() => {
              setImageIndex(null);
              console.log("cc");
            }}
          />
        )}
      </div>
    </>
  );
};
