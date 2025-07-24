import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';

const slots = [
  { day: 'Monday', meals: ['Smoothie bowl', 'Grilled chicken salad'] },
  { day: 'Wednesday', meals: ['Veggie stir-fry', 'Lentil soup'] },
  { day: 'Friday', meals: ['Pasta primavera', 'Homemade tacos'] },
];

const MealPlannerPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#E8351A] text-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFECB8] mb-4">Meal planner</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan your week with a calendar built for cooking.</h1>
          <p className="max-w-3xl text-white/90 text-lg leading-8">
            Drag and drop recipes into breakfast, lunch, and dinner slots. The planner updates weekly nutrition totals automatically.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl bg-white border-2 border-[#FFEDE9] p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6 text-[#E8351A]">
              <CalendarDays size={24} />
              <h2 className="text-2xl font-bold text-[#1A0A00]">Weekly meal calendar</h2>
            </div>
            <div className="grid gap-4">
              {slots.map((slot) => (
                <div key={slot.day} className="rounded-3xl border border-[#FFEDE9] p-5">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-[#1A0A00]">{slot.day}</p>
                    <ArrowRight size={18} className="text-[#E8351A]" />
                  </div>
                  <ul className="space-y-2 text-[#5C2D00]">
                    {slot.meals.map((meal) => (
                      <li key={meal} className="rounded-2xl bg-[#FFF8E1] px-4 py-2">{meal}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-[#FFF8E1] border-2 border-[#FFB800] p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#1A0A00] mb-4">Weekly totals</h2>
            <div className="space-y-4 text-[#5C2D00]">
              <div className="flex items-center justify-between rounded-3xl bg-white p-4">
                <span>Calories</span>
                <strong>12,450</strong>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-white p-4">
                <span>Protein</span>
                <strong>210g</strong>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-white p-4">
                <span>Carbs</span>
                <strong>915g</strong>
              </div>
              <div className="flex items-center justify-between rounded-3xl bg-white p-4">
                <span>Fats</span>
                <strong>340g</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPlannerPage;
