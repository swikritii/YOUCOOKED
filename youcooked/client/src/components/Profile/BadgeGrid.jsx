import React from 'react';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

const BadgeGrid = ({ badges = [] }) => {
  const allBadges = [
    { id: 'first-recipe', name: 'First Recipe', icon: '🍳', earned: badges.includes('first-recipe') },
    { id: 'streak-7', name: '7-Day Streak', icon: '🔥', earned: badges.includes('streak-7') },
    { id: 'chef', name: 'Home Chef', icon: '👨‍🍳', earned: badges.includes('chef') },
    { id: 'cookbook-50', name: '50 Saved', icon: '📚', earned: badges.includes('cookbook-50') },
    { id: 'rating-master', name: 'Rating Master', icon: '⭐', earned: badges.includes('rating-master') },
    { id: 'explorer', name: 'Recipe Explorer', icon: '🗺️', earned: badges.includes('explorer') }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {allBadges.map((badge, idx) => (
        <motion.div
          key={badge.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.05 }}
          className={`p-6 rounded-2xl text-center border-2 transition-all ${
            badge.earned
              ? 'bg-gradient-to-br from-[#FFB800] to-[#FFC933] border-[#FFB800] shadow-lg'
              : 'bg-[#FFFAF5] border-[#FFEDE9] opacity-60'
          }`}
        >
          <div className="text-4xl mb-3 flex items-center justify-center h-16">
            {badge.icon}
            {!badge.earned && (
              <Lock size={16} className="text-[#A07050] absolute" />
            )}
          </div>
          <p className={`text-sm font-semibold ${badge.earned ? 'text-[#1A0A00]' : 'text-[#A07050]'}`}>
            {badge.name}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default BadgeGrid;
