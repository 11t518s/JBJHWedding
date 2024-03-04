import { motion, AnimatePresence } from "framer-motion";

type SlideShowProps = {
  image: string;
};

export const SlideShow = ({ image }: SlideShowProps) => (
  <AnimatePresence>
    <motion.img
      key={image}
      src={image}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />
  </AnimatePresence>
);
