import React from 'react';
import { motion } from 'framer-motion';
import { Edit2, Trash2, ChefHat } from 'lucide-react';

const CookbookCard = ({ cookbookItem }) => {
  const recipe = cookbookItem.recipe_id || cookbookItem;

  const getEmoji = (title) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('egg')) return '🥚';
    if (lowerTitle.includes('pasta')) return '🍝';
    if (lowerTitle.includes('avocado')) return '🥑';
    if (lowerTitle.includes('pancake')) return '🥞';
    if (lowerTitle.includes('rice')) return '🍚';
    return '🍳';
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl border-2 border-[#FFEDE9] overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      {/* Header with Emoji */}
      <div className="bg-gradient-to-br from-[#FFB800] to-[#FFC933] py-10 flex items-center justify-center">
        <span className="text-5xl">{getEmoji(recipe.title)}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#1A0A00] mb-3">{recipe.title}</h3>

        {/* Personal Notes */}
        {cookbookItem.personal_notes && (
          <div className="bg-[#FFF8E1] rounded-lg p-4 mb-4 border-l-4 border-[#FFB800]">
            <p className="text-sm text-[#5C2D00] italic">
              "{cookbookItem.personal_notes}"
            </p>
          </div>
        )}

        {/* Stats Row */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <span className="bg-[#FFEDE9] text-[#E8351A] px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            <ChefHat size={14} />
            Cooked {cookbookItem.times_cooked || 0}x
          </span>
          {cookbookItem.user_rating && (
            <span className="bg-[#FFF8E1] text-[#1A0A00] px-3 py-1 rounded-full text-sm font-semibold">
              ⭐ {cookbookItem.user_rating}/5
            </span>
          )}
        </div>

        {cookbookItem.last_cooked && (
          <p className="text-xs text-[#A07050] mb-4">
            Last cooked: {new Date(cookbookItem.last_cooked).toLocaleDateString()}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 btn-primary py-2 text-sm font-bold">
            Cook Again
          </button>
          <button className="px-3 py-2 rounded-full border-2 border-[#E8351A] text-[#E8351A] hover:bg-[#FFEDE9] transition-colors">
            <Edit2 size={18} />
          </button>
          <button className="px-3 py-2 rounded-full border-2 border-[#E8351A] text-[#E8351A] hover:bg-[#FFEDE9] transition-colors">
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookbookCard;
