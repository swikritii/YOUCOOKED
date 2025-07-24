import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Flame, Droplet, Layers } from 'lucide-react';

const nutrition = {
  ingredient: 'Chicken breast',
  calories: 165,
  protein: 31,
  carbs: 0,
  fat: 3.6,
};

const NutritionScannerPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#E8351A] text-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFECB8] mb-4">Calorie & nutrition scanner</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Scan ingredients and see nutrition instantly.</h1>
          <p className="max-w-3xl text-white/90 text-lg leading-8">
            Use a quick scan or manual search to view calories, protein, carbs, fats, and a full nutrition breakdown for every recipe.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-3 mb-10">
          <div className="rounded-3xl bg-white border-2 border-[#FFEDE9] p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-5 text-[#E8351A]">
              <Apple size={24} />
              <h2 className="text-xl font-bold text-[#1A0A00]">Scanned item</h2>
            </div>
            <p className="text-[#5C2D00] mb-2">{nutrition.ingredient}</p>
            <div className="rounded-3xl bg-[#FFF3E7] p-4 text-[#E8351A] font-bold">Quick scan results ready</div>
          </div>

          <div className="rounded-3xl bg-[#FFF8E1] border-2 border-[#FFB800] p-8 shadow-lg">
            <p className="text-[#A07050] uppercase text-xs tracking-[0.2em] mb-4">Nutrition snapshot</p>
            <div className="grid gap-4">
              {[
                { label: 'Calories', value: nutrition.calories, icon: <Flame size={18} /> },
                { label: 'Protein', value: nutrition.protein, icon: <Layers size={18} /> },
                { label: 'Carbs', value: nutrition.carbs, icon: <Droplet size={18} /> },
                { label: 'Fat', value: nutrition.fat, icon: <Flame size={18} /> },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-3xl bg-white p-4">
                  <div className="rounded-2xl bg-[#FFEDE9] p-3 text-[#E8351A]">{item.icon}</div>
                  <div>
                    <p className="text-sm text-[#A07050]">{item.label}</p>
                    <p className="text-xl font-bold text-[#1A0A00]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white border-2 border-[#FFEDE9] p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-[#1A0A00] mb-4">Full recipe breakdown</h2>
          <p className="text-[#5C2D00] mb-6">Each recipe gives you calories per serving, macros, and a clean daily cooking log so you can track progress with every meal.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#FFF8E1] p-5">
              <p className="text-sm text-[#A07050] mb-2">Daily log</p>
              <p className="font-bold text-[#1A0A00]">3 meals logged</p>
            </div>
            <div className="rounded-3xl bg-[#FFF8E1] p-5">
              <p className="text-sm text-[#A07050] mb-2">Recipe nutrition</p>
              <p className="font-bold text-[#1A0A00]">Balanced and easy to follow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionScannerPage;
