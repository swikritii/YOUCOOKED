import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Edit2, Trash2 } from 'lucide-react';

const CookbookPage = () => {
  const [savedRecipes] = useState([
    {
      id: 1,
      title: 'Boiled Egg',
      times_cooked: 12,
      personal_notes: 'Perfect for quick breakfast! I cook these at 6:45 AM every day.',
      user_rating: 5,
      last_cooked: '2024-06-01',
      emoji: '🥚'
    },
    {
      id: 2,
      title: 'Pasta Aglio e Olio',
      times_cooked: 5,
      personal_notes: 'Amazing Italian classic. Remember to not burn the garlic!',
      user_rating: 4,
      last_cooked: '2024-05-28',
      emoji: '🍝'
    },
    {
      id: 3,
      title: 'Avocado Toast',
      times_cooked: 8,
      personal_notes: 'Great for weekend brunch. Add lemon juice for tanginess.',
      user_rating: 5,
      last_cooked: '2024-05-30',
      emoji: '🥑'
    },
  ]);

  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#E8351A] text-white py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <Bookmark size={32} className="text-[#FFB800]" />
            <h1 className="text-4xl font-bold">My Cookbook</h1>
          </div>
          <p className="text-white/90 text-lg">
            Your collection of saved recipes with personal notes
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {savedRecipes.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Bookmark size={64} className="mx-auto text-[#FFEDE9] mb-4" />
            <h2 className="text-2xl font-bold text-[#1A0A00] mb-2">No Saved Recipes Yet</h2>
            <p className="text-[#A07050]">Start exploring and save your favorite recipes!</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {savedRecipes.map((recipe, idx) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border-2 border-[#FFEDE9] overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Recipe Header with Emoji */}
                <div className="bg-gradient-to-br from-[#FFB800] to-[#FFC933] py-12 flex items-center justify-center">
                  <span className="text-6xl">{recipe.emoji}</span>
                </div>

                {/* Recipe Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A0A00] mb-3">{recipe.title}</h3>

                  {/* Personal Notes */}
                  <div className="bg-[#FFF8E1] rounded-lg p-4 mb-4 border-l-4 border-[#FFB800]">
                    <p className="text-sm text-[#5C2D00] italic">
                      "{recipe.personal_notes}"
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="flex gap-2 mb-4">
                    <span className="bg-[#FFEDE9] text-[#E8351A] px-3 py-1 rounded-full text-sm font-semibold">
                      🍳 Cooked {recipe.times_cooked}x
                    </span>
                    {recipe.user_rating && (
                      <span className="bg-[#FFF8E1] text-[#1A0A00] px-3 py-1 rounded-full text-sm font-semibold">
                        ⭐ {recipe.user_rating}/5
                      </span>
                    )}
                  </div>

                  {recipe.last_cooked && (
                    <p className="text-xs text-[#A07050] mb-4">
                      Last cooked: {new Date(recipe.last_cooked).toLocaleDateString()}
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
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CookbookPage;
