import { motion, AnimatePresence } from "framer-motion";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { P } from "..";

type ToastProps = {
  message: string;
  timeout?: number;
};

export type ToastHandler = {
  showToast: () => void;
};

const Toast = forwardRef<ToastHandler, ToastProps>(
  ({ message, timeout = 2000 }: ToastProps, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      showToast: () => {
        setIsVisible(true);
        setTimeout(() => {
          setIsVisible(false);
        }, timeout);
      },
    }));

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 60,
              width: "100vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                background: "#000000BF",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "12px",
              }}
            >
              <P color="white" variant="medium" size={16}>
                {message}
              </P>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

export default Toast;
