import React from 'react';
import { motion } from 'framer-motion';
import BadgeGrid from '../components/Profile/BadgeGrid';
import StreakCounter from '../components/Profile/StreakCounter';

const ProfilePage = () => {
  const user = {
    name: 'Swikriti',
    email: 'swikriti@example.com',
    avatar: 'S',
    skill_level: 'Home Chef',
    streak_count: 12,
    xp: 2450,
    xpGoal: 5000,
    badges: ['first-recipe', 'streak-7', 'chef', 'cookbook-50']
  };

  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Header Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#E8351A] text-white py-12 px-4"
      >
        <div className="max-w-4xl mx-auto flex items-center gap-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-24 rounded-full bg-[#FFB800] text-[#1A0A00] flex items-center justify-center text-4xl font-bold"
          >
            {user.avatar}
          </motion.div>

          <div>
            <h1 className="text-4xl font-bold mb-2">{user.name}</h1>
            <p className="text-white/90 mb-3">{user.email}</p>
            <span className="bg-[#FFB800] text-[#1A0A00] px-4 py-1 rounded-full font-semibold text-sm">
              {user.skill_level}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Streak Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <StreakCounter streak={user.streak_count} />
        </motion.div>

        {/* XP Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-[#1A0A00] mb-4">Experience Points</h2>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold text-[#E8351A]">{user.xp} / {user.xpGoal} XP</span>
              <span className="text-[#A07050] font-semibold">
                {Math.round((user.xp / user.xpGoal) * 100)}%
              </span>
            </div>
            
            <div className="w-full bg-[#FFF8E1] rounded-full h-4 border-2 border-[#FFB800] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(user.xp / user.xpGoal) * 100}%` }}
                transition={{ delay: 0.6, duration: 1 }}
                className="bg-gradient-to-r from-[#E8351A] to-[#FF5733] h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-[#FFFAF5] p-4 rounded-lg text-center border border-[#FFEDE9]">
              <p className="text-[#A07050] text-sm mb-1">Recipes Cooked</p>
              <p className="text-2xl font-bold text-[#1A0A00]">24</p>
            </div>
            <div className="bg-[#FFFAF5] p-4 rounded-lg text-center border border-[#FFEDE9]">
              <p className="text-[#A07050] text-sm mb-1">Skills Learned</p>
              <p className="text-2xl font-bold text-[#1A0A00]">8</p>
            </div>
            <div className="bg-[#FFFAF5] p-4 rounded-lg text-center border border-[#FFEDE9]">
              <p className="text-[#A07050] text-sm mb-1">Badges Earned</p>
              <p className="text-2xl font-bold text-[#1A0A00]">{user.badges.length}</p>
            </div>
          </div>
        </motion.div>

        {/* Achievements/Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-8"
        >
          <h2 className="text-2xl font-bold text-[#1A0A00] mb-8">Achievements</h2>
          <BadgeGrid badges={user.badges} />
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
