import React from 'react';
import { motion } from 'framer-motion';

const StreakCounter = ({ streak = 0 }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="bg-gradient-to-br from-[#E8351A] to-[#FF5733] text-white p-12 rounded-2xl text-center shadow-xl border-2 border-[#FFB800]"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
        className="text-8xl mb-4"
      >
        🔥
      </motion.div>
      <h2 className="text-5xl font-bold mb-2">{streak}</h2>
      <p className="text-xl opacity-95">Day Cooking Streak</p>
      <p className="text-sm opacity-80 mt-4">
        {streak === 0
          ? 'Start your cooking journey today!'
          : streak < 7
          ? 'Keep it going! 🚀'
          : 'Amazing dedication!'}
      </p>
    </motion.div>
  );
};

export default StreakCounter;
