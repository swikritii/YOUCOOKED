import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Clock } from 'lucide-react';

const RecipeCard = ({ recipe, onClick }) => {
  // Determine emoji based on cuisine/tags
  const getEmojiAndColor = () => {
    if (recipe.tags?.includes('egg')) return { emoji: '🥚', bg: 'from-[#FFB800] to-[#FFC933]' };
    if (recipe.cuisine?.toLowerCase() === 'italian' || recipe.tags?.includes('pasta')) 
      return { emoji: '🍝', bg: 'from-[#FF9F43] to-[#FFB800]' };
    if (recipe.tags?.includes('salad') || recipe.tags?.includes('vegan'))
      return { emoji: '🥗', bg: 'from-[#4CAF50] to-[#81C784]' };
    if (recipe.tags?.includes('breakfast')) return { emoji: '🥞', bg: 'from-[#FFB800] to-[#FFC933]' };
    return { emoji: '🍳', bg: 'from-[#FFB800] to-[#FFC933]' };
  };

  const { emoji, bg } = getEmojiAndColor();

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-[#FFEDE9] text-[#E8351A]';
      case 'home':
        return 'bg-[#FFE8CC] text-[#FF5733]';
      case 'confident':
        return 'bg-[#FFCCCB] text-[#D32F2F]';
      case 'chef':
        return 'bg-[#FF5252] text-white';
      default:
        return 'bg-[#FFEDE9] text-[#E8351A]';
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      onClick={onClick}
      className="bg-white rounded-2xl border-2 border-[#FFEDE9] overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
    >
      {/* Recipe image area */}
      <div className={`h-48 bg-gradient-to-br ${bg} flex items-center justify-center`}>
        <span className="text-6xl">{emoji}</span>
      </div>

      {/* Recipe info */}
      <div className="p-4">
        <h3 className="font-bold text-[#1A0A00] text-lg mb-3">
          {recipe.title || 'Recipe Title'}
        </h3>

        <div className="flex gap-2 items-center mb-3">
          <span className={`${getDifficultyColor(recipe.difficulty)} px-3 py-1 rounded-full text-xs font-semibold`}>
            {recipe.difficulty || 'Beginner'}
          </span>
          <div className="flex items-center gap-1 text-[#A07050] text-xs">
            <Clock size={14} />
            <span>{recipe.cookTime || '20'} min</span>
          </div>
        </div>

        {recipe.avg_rating && (
          <div className="flex items-center gap-1 text-sm">
            <span className="text-[#FFB800]">★</span>
            <span className="text-[#5C2D00] font-semibold">
              {recipe.avg_rating.toFixed(1)}
            </span>
            <span className="text-[#A07050]">({recipe.ratings_count || 0})</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RecipeCard;
