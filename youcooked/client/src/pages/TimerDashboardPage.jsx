import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Timer, PlayCircle } from 'lucide-react';

const timers = [
  { id: 1, title: 'Boiled egg', status: 'Running', remaining: '03:45', target: 'Soft boil' },
  { id: 2, title: 'Pan sauce', status: 'Paused', remaining: '05:12', target: 'Simmer' },
  { id: 3, title: 'Veg roast', status: 'Ready soon', remaining: '00:58', target: 'Crisp edges' },
];

const TimerDashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#E8351A] text-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFECB8] mb-4">Smart timer dashboard</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All your cooking timers in one place.</h1>
          <p className="max-w-3xl text-white/90 text-lg leading-8">
            Manage multiple timers simultaneously, get cute alerts, and stay in control of every step.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {timers.map((timer) => (
            <motion.div
              key={timer.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white border-2 border-[#FFEDE9] p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-2xl font-bold text-[#1A0A00]">{timer.title}</h2>
                  <p className="text-[#5C2D00] text-sm">{timer.target}</p>
                </div>
                <div className="rounded-2xl bg-[#FFF3E7] p-3 text-[#E8351A]">
                  <Timer size={20} />
                </div>
              </div>
              <div className="mb-6">
                <p className="text-5xl font-bold text-[#E8351A]">{timer.remaining}</p>
                <p className="text-[#A07050] mt-2">Status: {timer.status}</p>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 rounded-full bg-[#E8351A] px-4 py-3 text-white font-semibold hover:bg-[#C92F11] transition-colors">
                  {timer.status === 'Paused' ? 'Resume' : 'Pause'}
                </button>
                <button className="rounded-full border-2 border-[#FFEDE9] px-4 py-3 text-[#1A0A00] hover:bg-[#FFF8E1] transition-colors">
                  <PlayCircle size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-[#FFF8E1] border-2 border-[#FFB800] px-6 py-6">
          <div className="flex items-center gap-4 mb-4 text-[#1A0A00]">
            <Bell size={24} className="text-[#E8351A]" />
            <h2 className="text-2xl font-bold">Personalised alerts</h2>
          </div>
          <p className="text-[#5C2D00] leading-7">
            When a timer finishes, the app can notify you with a friendly message and gentle sound. Perfect for keeping your focus on the kitchen instead of the clock.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimerDashboardPage;
