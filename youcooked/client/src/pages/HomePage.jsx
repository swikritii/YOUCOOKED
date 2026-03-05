import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, Flame, Zap } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const [activeTag, setActiveTag] = useState('all');
  const [activeTimers, setActiveTimers] = useState([]);

  const tags = ['All', 'Breakfast', 'Quick meals', 'Nepali', 'Beginner', 'Vegan'];

  // Mock stats
  const stats = [
    { icon: '🔥', label: 'Cook Streak', value: user?.streak_count || 0, color: '#E8351A' },
    { icon: '⚡', label: 'XP Earned', value: user?.xp || 0, color: '#FFB800' },
    { icon: '🍳', label: 'Recipes Cooked', value: 12, color: '#E8351A' },
  ];

  // Mock active timers
  const mockTimers = [
    { id: 1, dish: 'Boiled Egg', time: '3:45', duration: 300 },
    { id: 2, dish: 'Pasta', time: '7:22', duration: 600 },
  ];

  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Hero Section */}
      <div className="bg-[#E8351A] text-white py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-3"
          >
            What are you <span className="text-[#FFB800]">cooking</span> today?
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg mb-8"
          >
            Discover recipes, track your progress, and master the kitchen.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="flex gap-2 bg-white rounded-full px-6 py-3 items-center shadow-lg">
              <Search size={20} className="text-[#5C2D00]" />
              <input
                type="text"
                placeholder="Search recipes by name, ingredient..."
                className="flex-1 outline-none text-[#5C2D00] placeholder-[#A07050]"
              />
            </div>
          </motion.div>

          {/* Tag Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 flex-wrap"
          >
            {tags.map((tag) => {
              const isActive = activeTag === tag.toLowerCase();
              return (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag.toLowerCase())}
                  className={`px-4 py-2 rounded-full font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#FFB800] text-[#1A0A00]'
                      : 'border border-white/50 text-white hover:border-white'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto px-4 -mt-8 relative z-10 mb-12"
      >
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#E8351A] text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-[#A07050] text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-[#1A0A00]">{stat.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Active Timers Section */}
      {mockTimers.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto px-4 mb-12"
        >
          <div className="bg-[#FFF8E1] border-4 border-[#FFB800] rounded-2xl p-6">
            <h2 className="text-xl font-bold text-[#1A0A00] mb-4">Active Timers</h2>
            
            {/* Timers */}
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
              {mockTimers.map((timer) => (
                <div
                  key={timer.id}
                  className="bg-white rounded-lg p-4 min-w-[150px] flex flex-col items-center"
                >
                  <p className="text-[#5C2D00] font-semibold text-sm mb-2">{timer.dish}</p>
                  <p className="text-2xl font-bold text-[#E8351A]">{timer.time}</p>
                  <button className="mt-3 text-[#E8351A] hover:opacity-80 text-sm font-semibold">
                    Pause
                  </button>
                </div>
              ))}
            </div>

            {/* Notification Banner */}
            <div className="bg-[#E8351A] text-white rounded-lg p-4 flex items-center gap-3">
              <Bell size={24} className="text-[#FFB800]" />
              <p className="text-sm">
                <span className="font-bold">Swikriti</span>, your boiled egg is ready — eat well, grow strong!
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Featured Recipes Section */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <h2 className="text-3xl font-bold text-[#1A0A00] mb-8">Featured Recipes</h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Placeholder recipe cards */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border-2 border-[#FFEDE9] overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              {/* Recipe image area */}
              <div className="h-48 bg-gradient-to-br from-[#FFB800] to-[#FFC933] flex items-center justify-center">
                <span className="text-6xl">🍳</span>
              </div>
              {/* Recipe info */}
              <div className="p-4">
                <h3 className="font-bold text-[#1A0A00] text-lg mb-2">Recipe Title</h3>
                <div className="flex gap-2 mb-3">
                  <span className="bg-[#FFEDE9] text-[#E8351A] px-3 py-1 rounded-full text-xs font-semibold">
                    Beginner
                  </span>
                  <span className="text-[#A07050] text-xs">⏱️ 15 min</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
