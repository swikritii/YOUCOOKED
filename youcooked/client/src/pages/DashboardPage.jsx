import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, Clock3, ShoppingBag, Users, Egg, Sparkles, CalendarDays, CheckSquare, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Recipe Detail',
    description: 'Full recipe pages with video, ingredient quantities and step timers.',
    path: '/recipe/1',
    icon: <Egg size={24} />,
  },
  {
    title: 'Guided Cooking',
    description: 'Distraction-free one-step-at-a-time mode with auto timers.',
    path: '/guided-cooking',
    icon: <Clock3 size={24} />,
  },
  {
    title: 'Timer Dashboard',
    description: 'See all active timers and receive sound alerts when food is ready.',
    path: '/timers',
    icon: <Activity size={24} />,
  },
  {
    title: 'Nutrition Scanner',
    description: 'Scan ingredients and view full calorie and macro breakdowns.',
    path: '/nutrition-scanner',
    icon: <BarChart3 size={24} />,
  },
  {
    title: 'Quantity Scanner',
    description: 'Verify your measuring cup and spoon quantities in real time.',
    path: '/quantity-scanner',
    icon: <CheckSquare size={24} />,
  },
  {
    title: 'Meal Planner',
    description: 'Drag recipes into a weekly meal calendar and track nutrition.',
    path: '/meal-planner',
    icon: <CalendarDays size={24} />,
  },
  {
    title: 'Shopping List',
    description: 'Auto-generated shopping list grouped by category for easy shopping.',
    path: '/shopping-list',
    icon: <ShoppingBag size={24} />,
  },
  {
    title: 'Community Recipes',
    description: 'Browse user recipes, rate them, and submit your own creations.',
    path: '/community',
    icon: <Users size={24} />,
  },
];

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#E8351A] text-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFECB8] mb-4">
            Cooking control center
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your kitchen dashboard, powered by recipes and timers.
          </h1>
          <p className="max-w-3xl text-white/90 text-lg leading-8">
            Browse featured recipe pages, manage multiple timers, plan your meals, and stay on top of nutrition with the same warm and energetic look you love from the home screen.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-bold text-[#1A0A00] mb-2">Fast access to every feature</h2>
            <p className="text-[#5C2D00] text-sm md:text-base">
              Tap any panel to jump straight into the experience you need, from guided cooking to shopping lists.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to="/explore" className="bg-[#FFB800] text-[#1A0A00] px-5 py-3 rounded-full font-semibold hover:bg-[#FFD444] transition-colors">
              Explore recipes
            </Link>
            <Link to="/community" className="bg-white text-[#1A0A00] px-5 py-3 rounded-full border-2 border-[#FFEDE9] hover:bg-[#FFF8E1] transition-colors">
              Community hub
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {features.map((feature) => (
            <Link
              to={feature.path}
              key={feature.title}
              className="group block rounded-3xl border-2 border-[#FFEDE9] bg-white p-6 shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF3E8] text-[#E8351A] mb-5">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1A0A00] mb-3">{feature.title}</h3>
              <p className="text-[#5C2D00] mb-6">{feature.description}</p>
              <span className="text-sm font-semibold text-[#E8351A] group-hover:text-[#C92F11]">Open page →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
