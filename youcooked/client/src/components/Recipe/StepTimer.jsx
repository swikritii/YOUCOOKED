import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Play, Pause, RotateCcw, Check } from 'lucide-react';

const StepTimer = ({ step, stepNumber, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(step.timer_seconds || 0);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsCompleted(true);
            onComplete && onComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, onComplete]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!step.timer_seconds) {
    return (
      <div className={`bg-white rounded-2xl border-2 border-[#FFEDE9] p-6 mb-4 ${isCompleted ? 'opacity-50' : ''}`}>
        <div className="flex gap-4 items-start">
          <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${isCompleted ? 'bg-green-500' : 'bg-[#E8351A]'}`}>
            {isCompleted ? <Check size={20} /> : stepNumber}
          </div>
          <div className="flex-1">
            <p className="text-[#5C2D00] text-base">{step.instruction}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white rounded-2xl border-2 border-[#FFEDE9] p-6 mb-4 ${isCompleted ? 'opacity-50' : ''}`}
    >
      <div className="flex gap-4 items-start mb-4">
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${isCompleted ? 'bg-green-500' : 'bg-[#E8351A]'}`}>
          {isCompleted ? <Check size={20} /> : stepNumber}
        </div>
        <div className="flex-1">
          <p className="text-[#5C2D00] text-base">{step.instruction}</p>
        </div>
      </div>

      {!isCompleted && (
        <div className="bg-[#FFF8E1] rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Clock size={20} className="text-[#E8351A]" />
            <div className="text-center">
              <p className="text-sm text-[#A07050]">Timer</p>
              <p className="text-3xl font-bold text-[#E8351A]">{formatTime(timeLeft)}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsRunning(!isRunning)}
              className="bg-[#E8351A] text-white p-2 rounded-full hover:bg-[#FF5733] transition-colors"
            >
              {isRunning ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={() => {
                setTimeLeft(step.timer_seconds);
                setIsRunning(false);
              }}
              className="bg-[#A07050] text-white p-2 rounded-full hover:bg-[#8D6E63] transition-colors"
            >
              <RotateCcw size={20} />
            </button>
          </div>
        </div>
      )}

      {isCompleted && (
        <div className="bg-green-50 rounded-lg p-4 text-center">
          <p className="text-green-600 font-bold text-lg">Done! ✓</p>
        </div>
      )}
    </motion.div>
  );
};

export default StepTimer;
