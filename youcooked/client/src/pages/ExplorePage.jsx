import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RecipeCard from '../components/Recipe/RecipeCard';

const ExplorePage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedCuisine, setSelectedCuisine] = useState('all');

  const difficulties = ['all', 'beginner', 'home', 'confident', 'chef'];
  const cuisines = ['all', 'International', 'Italian', 'Asian', 'Indian', 'American'];

  // Mock recipe data
  const recipes = [
    {
      id: 1,
      title: 'Boiled Egg',
      difficulty: 'beginner',
      cuisine: 'International',
      tags: ['egg', 'breakfast'],
      avg_rating: 4.8,
      ratings_count: 156,
      emoji: '🥚'
    },
    {
      id: 2,
      title: 'Pasta Aglio e Olio',
      difficulty: 'home',
      cuisine: 'Italian',
      tags: ['pasta', 'quick'],
      avg_rating: 4.6,
      ratings_count: 89,
      emoji: '🍝'
    },
    {
      id: 3,
      title: 'Avocado Toast',
      difficulty: 'beginner',
      cuisine: 'American',
      tags: ['breakfast', 'quick'],
      avg_rating: 4.7,
      ratings_count: 120,
      emoji: '🥑'
    },
    {
      id: 4,
      title: 'Banana Pancakes',
      difficulty: 'beginner',
      cuisine: 'American',
      tags: ['breakfast', 'sweet'],
      avg_rating: 4.9,
      ratings_count: 245,
      emoji: '🥞'
    },
    {
      id: 5,
      title: 'Poached Egg',
      difficulty: 'home',
      cuisine: 'International',
      tags: ['egg', 'breakfast'],
      avg_rating: 4.5,
      ratings_count: 67,
      emoji: '🥚'
    },
    {
      id: 6,
      title: 'Fried Rice',
      difficulty: 'home',
      cuisine: 'Asian',
      tags: ['quick', 'dinner'],
      avg_rating: 4.4,
      ratings_count: 98,
      emoji: '🍚'
    },
  ];

  const filteredRecipes = recipes.filter((recipe) => {
    const difficultyMatch = selectedDifficulty === 'all' || recipe.difficulty === selectedDifficulty;
    const cuisineMatch = selectedCuisine === 'all' || recipe.cuisine === selectedCuisine;
    return difficultyMatch && cuisineMatch;
  });

  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-[#E8351A] text-white py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Explore Recipes</h1>
          <p className="text-white/90">Discover amazing recipes for every skill level</p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-6 mb-12"
        >
          <h2 className="text-xl font-bold text-[#1A0A00] mb-6">Filters</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Difficulty Filter */}
            <div>
              <label className="block text-[#1A0A00] font-semibold mb-3">Difficulty Level</label>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setSelectedDifficulty(diff)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all ${
                      selectedDifficulty === diff
                        ? 'bg-[#E8351A] text-white'
                        : 'bg-[#FFEDE9] text-[#E8351A] hover:bg-[#FFE0D6]'
                    }`}
                  >
                    {diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Cuisine Filter */}
            <div>
              <label className="block text-[#1A0A00] font-semibold mb-3">Cuisine</label>
              <div className="flex flex-wrap gap-2">
                {cuisines.map((cuisine) => (
                  <button
                    key={cuisine}
                    onClick={() => setSelectedCuisine(cuisine)}
                    className={`px-4 py-2 rounded-full font-semibold transition-all ${
                      selectedCuisine === cuisine
                        ? 'bg-[#E8351A] text-white'
                        : 'bg-[#FFEDE9] text-[#E8351A] hover:bg-[#FFE0D6]'
                    }`}
                  >
                    {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Recipe Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {filteredRecipes.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-[#A07050]">No recipes found matching your filters</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRecipes.map((recipe, idx) => (
                <motion.div
                  key={recipe.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <RecipeCard recipe={recipe} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-[#A07050] mt-8"
        >
          Showing {filteredRecipes.length} recipe{filteredRecipes.length !== 1 ? 's' : ''}
        </motion.p>
      </div>
    </div>
  );
};

export default ExplorePage;
