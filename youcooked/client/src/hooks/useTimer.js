import { useState, useCallback } from 'react';

export const useTimer = (initialSeconds = 0) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setTimeLeft(initialSeconds);
    setIsRunning(false);
  }, [initialSeconds]);

  // Countdown effect would go here in a real implementation
  // This is a placeholder for the logic

  return { timeLeft, isRunning, start, pause, reset };
};
