import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pause, Play, X } from 'lucide-react';

const TimerModal = ({ timers = [], onPause, onResume, onRemove }) => {
  if (timers.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 400, opacity: 0 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <div className="bg-white rounded-2xl border-4 border-[#FFB800] shadow-2xl max-w-sm">
          <div className="bg-[#FFB800] text-[#1A0A00] px-6 py-4 font-bold text-lg rounded-t-xl">
            ⏱️ Active Timers ({timers.length})
          </div>

          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {timers.map((timer) => (
              <motion.div
                key={timer.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-[#FFFAF5] rounded-lg border-2 border-[#FFEDE9] p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-[#1A0A00]">{timer.dish}</h4>
                  <button
                    onClick={() => onRemove(timer.id)}
                    className="text-[#A07050] hover:text-[#E8351A] transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="text-3xl font-bold text-[#E8351A] text-center mb-3">
                  {Math.floor(timer.timeLeft / 60)}:{String(timer.timeLeft % 60).padStart(2, '0')}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => timer.isRunning ? onPause(timer.id) : onResume(timer.id)}
                    className="flex-1 py-2 bg-[#E8351A] text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#FF5733] transition-colors"
                  >
                    {timer.isRunning ? (
                      <>
                        <Pause size={16} /> Pause
                      </>
                    ) : (
                      <>
                        <Play size={16} /> Resume
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TimerModal;
