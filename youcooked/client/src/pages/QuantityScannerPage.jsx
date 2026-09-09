import React from 'react';
import { motion } from 'framer-motion';
import { Camera, CheckCircle2, XCircle } from 'lucide-react';

const QuantityScannerPage = () => {
  const matches = true;
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#E8351A] text-white py-16 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFECB8] mb-4">Quantity scanner</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Check your measurements with visual guidance.</h1>
          <p className="max-w-3xl text-white/90 text-lg leading-8">
            Point the camera at your spoon, cup, or scale and the app lets you know if the quantity is too much, too little, or just right.
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl bg-white border-2 border-[#FFEDE9] p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Camera size={28} className="text-[#E8351A]" />
              <h2 className="text-2xl font-bold text-[#1A0A00]">Live measurement check</h2>
            </div>
            <p className="text-[#5C2D00] mb-8">
              The scanner verifies your quantity against the recipe requirement and highlights the result with green for correct and red for adjustments.
            </p>
            <div className="rounded-3xl bg-[#FFF8E1] p-6 border border-[#FFB800]">
              <p className="text-[#A07050] text-sm uppercase tracking-[0.2em] mb-2">Current count</p>
              <p className="text-4xl font-bold text-[#1A0A00]">1/2 cup</p>
              <p className="text-[#5C2D00] mt-2">Perfect for the recipe.</p>
            </div>
          </div>

          <div className="rounded-3xl bg-[#FFF8E1] border-2 border-[#FFB800] p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-5">
              {matches ? (
                <CheckCircle2 size={28} className="text-[#2F8A3D]" />
              ) : (
                <XCircle size={28} className="text-[#C92F11]" />
              )}
              <h2 className="text-2xl font-bold text-[#1A0A00]">Measurement status</h2>
            </div>
            <p className="text-[#5C2D00] mb-4">
              {matches ? 'Your quantity matches the recipe perfectly.' : 'Adjust your measurement to match the suggested amount.'}
            </p>
            <div className="rounded-3xl bg-white p-5 text-[#1A0A00]">
              <p className="text-sm text-[#A07050]">Suggested amount</p>
              <p className="text-2xl font-bold">1/2 cup</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityScannerPage;
