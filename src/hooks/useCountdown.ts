import { useEffect, useRef, useState } from "react";

import dayjs from "dayjs";

type UseCountDownProps = {
  standardDate: dayjs.Dayjs;
  targetDate: dayjs.Dayjs;
};

const useCountDown = ({ standardDate, targetDate }: UseCountDownProps) => {
  const [standard, setStandard] = useState(dayjs(standardDate));
  const [isOver, setIsOver] = useState(false);

  const target = dayjs(targetDate);

  const getDifference = () => {
    const difference = target.diff(standard, "second");
    const seconds = difference % 60;
    const minutes = Math.floor(difference / 60) % 60;
    const hours = Math.floor(difference / 3600) % 24;
    const days = Math.floor(difference / 86400);

    return {
      seconds: Math.abs(seconds),
      minutes: Math.abs(minutes),
      hours: Math.abs(hours),
      days: Math.abs(days),
      isOver,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStandard((prev) => {
        return prev.add(1, "second");
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isOver) {
      return;
    }
    if (standard.isBefore(target)) {
      return;
    }

    setIsOver(true);
  }, [standard]);

  return getDifference();
};

export default useCountDown;
