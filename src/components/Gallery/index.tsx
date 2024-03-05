"use client";

import { ShowWeddingText } from "@/animations";
import { useState } from "react";
import styles from "./gallery.module.css";
import globalStyles from "@/styles/global.module.css";
import { Modal } from "./Modal";
import { motion } from "framer-motion";
import { images, thumbnailImages } from "@/constants";
import Image from "next/image";

export const Gallery = () => {
  const [imageIndex, setImageIndex] = useState<null | number>(null);

  return (
    <div className={globalStyles.contentContainer}>
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
          gap: 8,
        }}
      >
        {thumbnailImages.map((item, index) => {
          return (
            <motion.div
              className={styles.box}
              layoutId={String(index)}
              key={item}
              whileHover={{
                transition: { duration: 0.3 },
              }}
              onClick={() => {
                setImageIndex(index);
              }}
              style={{
                borderRadius: 8,
              }}
            >
              <Image width={100} height={100} src={item} alt="갤러리" />
            </motion.div>
          );
        })}
      </div>
      {imageIndex !== null && (
        <Modal
          index={imageIndex}
          layoutId={String(imageIndex)}
          onDissmiss={() => {
            setImageIndex(null);
          }}
        />
      )}
      {/* 이미지를 미리 불러오기 위한 처리 */}
      {images.map((item) => (
        <img width={0} height={0} src={item} key={item} />
      ))}
    </div>
  );
};
