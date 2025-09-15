import { Box, Text } from "@components/Restyle";
import React, { useEffect, useRef, useState } from "react";

interface SimpleTimerProps {
  initialMinutes: number;
  customClassName?: string;
  onComplete?: () => void; // Optional function to run when the timer completes
  onRestart?: boolean; // Optional boolean to trigger restart
}

const SimpleTimer: React.FC<SimpleTimerProps> = ({
  initialMinutes,
  customClassName,
  onComplete,
  onRestart,
}) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60); // Convert minutes to seconds
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Restart the timer if the onRestart prop is true
  useEffect(() => {
    if (onRestart) {
      setTimeLeft(initialMinutes * 60);
    }
  }, [onRestart, initialMinutes]);
  useEffect(() => {
    if (timeLeft <= 0) {
      if (onComplete) {
        onComplete(); // Trigger the custom function when the timer completes
      }
      return;
    }
    timerRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current!);
  }, [timeLeft, onComplete]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Box>
      <Text>
        {minutes > 0 && String(minutes).padStart(2, "0")}
        {minutes > 0 && ":"}
        {String(seconds).padStart(2, "0")}s
      </Text>
    </Box>
  );
};

const MemoizedSimpleTimer = React.memo(SimpleTimer);
export default MemoizedSimpleTimer;
