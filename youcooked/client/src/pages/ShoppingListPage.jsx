import React from 'react';
import { motion } from 'framer-motion';
import { ListTree, CheckCircle2 } from 'lucide-react';

const shoppingGroups = [
  { title: 'Produce', items: ['Spinach', 'Tomatoes', 'Garlic'] },
  { title: 'Pantry', items: ['Olive oil', 'Rice', 'Chili flakes'] },
  { title: 'Dairy & Eggs', items: ['Eggs', 'Butter', 'Parmesan'] },
];

const ShoppingListPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#E8351A] text-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFECB8] mb-4">Shopping list</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Auto-generated ingredients, grouped by category.</h1>
          <p className="max-w-3xl text-white/90 text-lg leading-8">
            Build your list from the weekly meal plan and mark items as bought while you shop.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {shoppingGroups.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white border-2 border-[#FFEDE9] p-6 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-5 text-[#E8351A]">
                <ListTree size={24} />
                <h2 className="text-xl font-bold text-[#1A0A00]">{group.title}</h2>
              </div>
              <ul className="space-y-3 text-[#5C2D00]">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 rounded-2xl bg-[#FFF8E1] p-4">
                    <CheckCircle2 className="text-[#E8351A]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShoppingListPage;
