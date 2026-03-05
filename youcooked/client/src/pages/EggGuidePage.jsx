import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EggGuidePage = () => {
  const [selectedMethod, setSelectedMethod] = useState('soft-boiled');

  const eggMethods = [
    {
      id: 'soft-boiled',
      name: 'Soft Boiled',
      emoji: '🥚',
      time: '6-7 min',
      steps: [
        'Bring water to a rolling boil',
        'Gently lower eggs into water',
        'Set timer for 6-7 minutes',
        'Transfer to ice bath immediately',
        'Peel under cool running water'
      ],
      yolk: 'Runny, creamy yolk perfect for dipping',
      white: 'Fully set white'
    },
    {
      id: 'hard-boiled',
      name: 'Hard Boiled',
      emoji: '🥚',
      time: '12 min',
      steps: [
        'Bring water to a rolling boil',
        'Gently lower eggs into water',
        'Set timer for 12 minutes',
        'Transfer to ice bath immediately',
        'Peel under cool running water'
      ],
      yolk: 'Fully set, creamy yellow center',
      white: 'Fully set white'
    },
    {
      id: 'poached',
      name: 'Poached',
      emoji: '🍳',
      time: '3-4 min',
      steps: [
        'Bring water with vinegar to gentle simmer',
        'Create whirlpool with spoon',
        'Carefully crack egg into center',
        'Simmer for 3-4 minutes',
        'Use slotted spoon to remove'
      ],
      yolk: 'Runny, vibrant yolk',
      white: 'Silky, just set white'
    },
    {
      id: 'fried',
      name: 'Fried',
      emoji: '🍳',
      time: '3-5 min',
      steps: [
        'Heat butter or oil in skillet over medium-high heat',
        'Crack egg into skillet',
        'For sunny-side up: cook 3 minutes',
        'For over-easy: flip and cook 30 seconds',
        'For over-hard: flip and cook 1-2 minutes'
      ],
      yolk: 'Runny (sunny-side) to set (over-hard)',
      white: 'Crispy edges, set center'
    }
  ];

  const currentMethod = eggMethods.find((m) => m.id === selectedMethod);

  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-[#FFB800] to-[#FFC933] py-12 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🥚</div>
          <h1 className="text-4xl font-bold text-[#1A0A00] mb-2">The Complete Egg Guide</h1>
          <p className="text-[#5C2D00]">Master the perfect egg cooking technique</p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Method Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-[#1A0A00] mb-6">Select Method</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eggMethods.map((method) => (
              <motion.button
                key={method.id}
                onClick={() => setSelectedMethod(method.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-2xl border-2 transition-all font-semibold text-center ${
                  selectedMethod === method.id
                    ? 'bg-[#E8351A] text-white border-[#E8351A] shadow-lg'
                    : 'bg-[#FFEDE9] text-[#E8351A] border-[#FFEDE9] hover:border-[#E8351A]'
                }`}
              >
                <div className="text-3xl mb-2">{method.emoji}</div>
                {method.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Method Details */}
        {currentMethod && (
          <motion.div
            key={selectedMethod}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Instructions */}
            <div className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-8">
              <h3 className="text-2xl font-bold text-[#1A0A00] mb-6 flex items-center gap-3">
                <span className="text-4xl">{currentMethod.emoji}</span>
                {currentMethod.name}
              </h3>

              <div className="mb-6 p-4 bg-[#FFF8E1] rounded-lg border-2 border-[#FFB800]">
                <p className="text-[#5C2D00] font-bold">
                  ⏱️ Cooking Time: <span className="text-[#E8351A]">{currentMethod.time}</span>
                </p>
              </div>

              <h4 className="text-lg font-bold text-[#1A0A00] mb-4">Steps</h4>
              <div className="space-y-3">
                {currentMethod.steps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="bg-[#E8351A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-[#5C2D00] pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              {/* Yolk Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-[#FFC933] to-[#FFB800] rounded-2xl border-2 border-[#FFB800] p-8 text-white"
              >
                <h4 className="text-xl font-bold mb-2">🟡 Yolk</h4>
                <p>{currentMethod.yolk}</p>
              </motion.div>

              {/* White Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-8"
              >
                <h4 className="text-xl font-bold text-[#1A0A00] mb-2">⚪ White</h4>
                <p className="text-[#5C2D00]">{currentMethod.white}</p>
              </motion.div>

              {/* Pro Tips */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-[#FFF8E1] rounded-2xl border-2 border-[#FFB800] p-8"
              >
                <h4 className="text-lg font-bold text-[#1A0A00] mb-4">💡 Pro Tips</h4>
                <ul className="space-y-2 text-[#5C2D00] text-sm">
                  <li>• Use room temperature eggs for more even cooking</li>
                  <li>• Always use an ice bath to stop cooking immediately</li>
                  <li>• Add salt and pepper for extra flavor</li>
                  <li>• Use a timer - it's your best friend!</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EggGuidePage;
