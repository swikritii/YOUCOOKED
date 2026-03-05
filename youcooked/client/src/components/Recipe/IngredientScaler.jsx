import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const IngredientScaler = ({ recipe }) => {
  const [servings, setServings] = useState(recipe.servings || 1);
  const [unitSystem, setUnitSystem] = useState('metric');

  const handleServingsChange = (delta) => {
    const newServings = Math.max(0.5, servings + delta);
    setServings(newServings);
  };

  const getScaledQuantity = (quantity) => {
    const scaled = quantity * (servings / (recipe.servings || 1));
    return scaled.toFixed(2);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-[#A07050] text-sm mb-1">Serving Size</p>
          <p className="text-5xl font-bold text-[#1A0A00]">{servings.toFixed(1)}</p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => handleServingsChange(-0.5)}
            className="bg-[#E8351A] text-white p-3 rounded-full hover:bg-[#FF5733] transition-colors"
          >
            <Minus size={20} />
          </button>
          <button
            onClick={() => handleServingsChange(0.5)}
            className="bg-[#E8351A] text-white p-3 rounded-full hover:bg-[#FF5733] transition-colors"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>

      {/* Unit Toggle */}
      <div className="mb-6">
        <div className="flex gap-2 bg-[#FFF8E1] p-1 rounded-full w-fit">
          <button
            onClick={() => setUnitSystem('metric')}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-all ${
              unitSystem === 'metric'
                ? 'bg-[#FFB800] text-[#1A0A00]'
                : 'text-[#5C2D00]'
            }`}
          >
            Metric
          </button>
          <button
            onClick={() => setUnitSystem('imperial')}
            className={`px-4 py-1 rounded-full text-sm font-semibold transition-all ${
              unitSystem === 'imperial'
                ? 'bg-[#FFB800] text-[#1A0A00]'
                : 'text-[#5C2D00]'
            }`}
          >
            Imperial
          </button>
        </div>
      </div>

      {/* Ingredients List */}
      <h3 className="text-xl font-bold text-[#1A0A00] mb-4">Ingredients</h3>
      <div className="space-y-3">
        {recipe.ingredients?.map((ingredient, index) => (
          <div key={index} className="flex justify-between items-center pb-3 border-b border-[#FFEDE9] last:border-0">
            <div>
              <p className="font-medium text-[#5C2D00]">{ingredient.name}</p>
              {ingredient.notes && (
                <p className="text-[#A07050] text-xs">{ingredient.notes}</p>
              )}
            </div>
            <div className="text-right">
              <p className="text-lg font-bold text-[#E8351A]">
                {getScaledQuantity(ingredient.quantity)}
              </p>
              <p className="text-xs text-[#A07050]">{ingredient.unit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientScaler;
