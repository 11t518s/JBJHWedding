import { MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type UseParallaxProps = {
  distance: number;
};

export const useParallax = ({ distance }: UseParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return { ref, y };
};
