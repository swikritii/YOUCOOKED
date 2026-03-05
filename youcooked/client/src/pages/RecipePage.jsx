import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Heart, Share2, Star } from 'lucide-react';
import IngredientScaler from '../components/Recipe/IngredientScaler';
import StepTimer from '../components/Recipe/StepTimer';
import NutritionChart from '../components/Recipe/NutritionChart';

// Mock recipe data
const mockRecipe = {
  id: 1,
  title: 'Boiled Egg',
  description: 'Perfect soft or hard boiled eggs - a breakfast staple',
  cuisine: 'International',
  difficulty: 'beginner',
  tags: ['egg', 'breakfast', 'quick', 'protein'],
  servings: 1,
  avg_rating: 4.8,
  ratings_count: 156,
  ingredients: [
    { name: 'Egg', quantity: 1, unit: 'whole', notes: 'Room temperature' }
  ],
  steps: [
    { instruction: 'Bring water to a boil', timer_seconds: 300 },
    { instruction: 'Gently place egg in boiling water', timer_seconds: 0 },
    { instruction: 'For soft boiled: cook for 6-7 minutes', timer_seconds: 360 },
    { instruction: 'For hard boiled: cook for 12 minutes', timer_seconds: 720 },
    { instruction: 'Transfer to ice bath to cool', timer_seconds: 300 }
  ],
  nutrition: {
    calories: 70,
    protein: 6,
    carbs: 1,
    fat: 5
  },
  youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
};

const RecipePage = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [servings, setServings] = useState(mockRecipe.servings || 1);
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-[#FFB800] to-[#FFC933] py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-5xl font-bold text-[#1A0A00] mb-3"
              >
                {mockRecipe.title}
              </motion.h1>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-[#5C2D00] text-lg mb-4"
              >
                {mockRecipe.description}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex gap-4 items-center flex-wrap"
              >
                <span className="bg-[#FFEDE9] text-[#E8351A] px-4 py-2 rounded-full font-semibold">
                  {mockRecipe.difficulty}
                </span>
                <span className="text-[#1A0A00] font-semibold">
                  ⏱️ 30 min
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400">★★★★★</span>
                  <span className="font-semibold text-[#1A0A00]">
                    {mockRecipe.avg_rating} ({mockRecipe.ratings_count})
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-7xl flex-shrink-0"
            >
              🥚
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Left Column - Ingredients & Steps */}
          <div className="lg:col-span-2 space-y-8">
            {/* Ingredient Scaler */}
            <IngredientScaler recipe={mockRecipe} />

            {/* Steps */}
            <div className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-6">
              <h2 className="text-2xl font-bold text-[#1A0A00] mb-6">Cooking Steps</h2>
              <div className="space-y-0">
                {mockRecipe.steps.map((step, idx) => (
                  <StepTimer
                    key={idx}
                    step={step}
                    stepNumber={idx + 1}
                    onComplete={() => console.log(`Step ${idx + 1} completed!`)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Nutrition & Actions */}
          <div className="space-y-6">
            {/* Nutrition Chart */}
            <NutritionChart nutrition={mockRecipe.nutrition} servings={servings} />

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-6 space-y-3">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className={`w-full py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2 ${
                  isSaved
                    ? 'bg-[#E8351A] text-white'
                    : 'border-2 border-[#E8351A] text-[#E8351A]'
                }`}
              >
                <Heart size={20} fill={isSaved ? 'currentColor' : 'none'} />
                {isSaved ? 'Saved' : 'Save Recipe'}
              </button>

              <button className="w-full py-3 rounded-full font-bold border-2 border-[#E8351A] text-[#E8351A] hover:bg-[#FFEDE9] transition-colors flex items-center justify-center gap-2">
                <Share2 size={20} />
                Share
              </button>
            </div>

            {/* Rating Section */}
            <div className="bg-[#FFF8E1] rounded-2xl border-2 border-[#FFB800] p-6">
              <h3 className="font-bold text-[#1A0A00] mb-4">Rate This Recipe</h3>
              <div className="flex justify-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setUserRating(star)}
                    className="text-3xl transition-transform hover:scale-110"
                  >
                    {star <= (hoverRating || userRating) ? '★' : '☆'}
                  </button>
                ))}
              </div>
              <p className="text-center text-sm text-[#5C2D00]">
                {userRating > 0 ? `You rated: ${userRating} stars` : 'Click to rate'}
              </p>
            </div>

            {/* Cook Button */}
            <button className="w-full btn-primary py-4 text-lg font-bold">
              Start Cooking
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipePage;
