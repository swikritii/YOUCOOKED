import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

const recipes = [
  { title: 'Mango curry', tag: 'Vegan', rating: 4.9 },
  { title: 'Spiced lentils', tag: 'Healthy', rating: 4.8 },
  { title: 'Egg and herb toast', tag: 'Quick', rating: 4.7 },
];

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#E8351A] text-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFECB8] mb-4">Community recipes</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse and submit recipes created by home cooks.</h1>
          <p className="max-w-3xl text-white/90 text-lg leading-8">
            Share your favorite dishes, rate others, and filter by cuisine, difficulty, or dietary tag.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#1A0A00]">Top community picks</h2>
            <p className="text-[#5C2D00]">Highly rated recipes from your neighborhood of cooks.</p>
          </div>
          <button className="rounded-full bg-[#FFB800] px-5 py-3 font-semibold text-[#1A0A00] hover:bg-[#FFD444] transition-colors">
            Submit a recipe
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white border-2 border-[#FFEDE9] p-6 shadow-lg"
            >
              <div className="mb-5 rounded-3xl bg-[#FFF8E1] p-5">
                <div className="text-3xl">🍲</div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A0A00] mb-2">{recipe.title}</h3>
              <div className="flex items-center gap-2 mb-4 text-[#5C2D00]">
                <span className="rounded-full bg-[#FFEDE9] px-3 py-1 text-sm font-semibold text-[#E8351A]">{recipe.tag}</span>
                <span className="flex items-center gap-1">{Array.from({ length: 5 }, (_, i) => i < Math.round(recipe.rating) ? '★' : '☆').join('')} </span>
              </div>
              <div className="flex items-center gap-2 text-[#A07050] text-sm">
                <Heart size={18} /> <span>Like</span>
                <Sparkles size={18} /> <span>{recipe.rating} rating</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
