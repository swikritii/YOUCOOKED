import React from 'react';
import { motion } from 'framer-motion';
import { Clock3, CheckCircle2, Zap } from 'lucide-react';

const steps = [
  { time: '00:00', label: 'Preheat pan and gather ingredients' },
  { time: '02:00', label: 'Sear the vegetables until golden' },
  { time: '08:00', label: 'Add sauce, stir and simmer' },
  { time: '12:00', label: 'Plate and finish with garnish' },
];

const GuidedCookingPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#E8351A] text-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFECB8] mb-4">Guided cooking mode</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">One step at a time, with automatic timers.</h1>
          <p className="max-w-3xl text-white/90 text-lg leading-8">
            Stay focused on the dish. Each step is shown clearly in large text, and the next timer starts exactly when you need it.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border-2 border-[#FFEDE9] p-8 shadow-lg">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-[#1A0A00]">Current step</h2>
                  <p className="text-[#5C2D00] mt-2">This timer begins as soon as you're ready.</p>
                </div>
                <div className="rounded-2xl bg-[#FFB800] px-4 py-3 text-[#1A0A00] font-bold">2 / 4</div>
              </div>

              <div className="rounded-3xl bg-[#FFF3E7] p-8">
                <div className="text-sm text-[#A07050] uppercase tracking-[0.2em] mb-2">Step 3</div>
                <h3 className="text-4xl font-bold text-[#1A0A00] mb-4">Add sauce and simmer for 4 minutes</h3>
                <p className="text-[#5C2D00] mb-8">Stir slowly so the flavors combine without burning the bottom of the pan.</p>
                <div className="flex items-center gap-4">
                  <div className="rounded-3xl bg-white px-5 py-3 text-[#E8351A] font-bold">04:00</div>
                  <button className="rounded-full bg-[#E8351A] px-6 py-3 text-white font-bold hover:bg-[#D42D0E] transition-colors">
                    Start timer
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#FFF8E1] p-6 border-2 border-[#FFB800]">
                <div className="flex items-center gap-3 mb-4 text-[#E8351A]">
                  <Clock3 size={24} />
                  <h3 className="font-semibold">Auto timer</h3>
                </div>
                <p className="text-[#5C2D00]">Your next step timer starts when you complete the current action.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 border-2 border-[#FFEDE9]">
                <div className="flex items-center gap-3 mb-4 text-[#E8351A]">
                  <Zap size={24} />
                  <h3 className="font-semibold">Distraction-free layout</h3>
                </div>
                <p className="text-[#5C2D00]">Large text, clear progress, and no clutter so you can focus on cooking.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#E8351A] rounded-3xl p-8 text-white shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#FFECB8]">Personalised alert</p>
                  <h2 className="text-3xl font-bold mt-2">Ping when your food is ready</h2>
                </div>
                <CheckCircle2 size={28} className="text-[#FFB800]" />
              </div>
              <p className="text-white/90 leading-7">Our guided cooking mode sends a friendly notification for every step, and the screen stays easy to read from across the kitchen.</p>
            </div>

            <div className="rounded-3xl bg-white border-2 border-[#FFEDE9] p-6 shadow-lg">
              <h3 className="font-bold text-[#1A0A00] mb-4">Today’s meal</h3>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.time} className="flex items-start gap-4 rounded-3xl border border-[#FFEDE9] p-4">
                    <div className="min-w-[64px] rounded-2xl bg-[#FFF3E7] p-3 text-[#E8351A] font-bold text-center">{step.time}</div>
                    <p className="text-[#5C2D00]">{step.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidedCookingPage;
