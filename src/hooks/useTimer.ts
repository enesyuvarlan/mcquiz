import { useEffect, useState } from "react";

type UseTimerProps = {
  duration: number;
  onTimeComplete: () => void;
};

const useTimer = ({ duration, onTimeComplete }: UseTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeComplete();
          return duration;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [duration, onTimeComplete]);

  return timeLeft;
};

export default useTimer;
