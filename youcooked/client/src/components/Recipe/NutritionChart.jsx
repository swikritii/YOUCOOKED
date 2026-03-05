import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const NutritionChart = ({ nutrition, servings = 1 }) => {
  const data = [
    { name: 'Protein', value: nutrition.protein || 0 },
    { name: 'Carbs', value: nutrition.carbs || 0 },
    { name: 'Fat', value: nutrition.fat || 0 }
  ];

  const COLORS = ['#4CAF50', '#E8351A', '#FFB800'];

  // Scale by servings
  const calories = Math.round((nutrition.calories || 0) * servings);

  return (
    <div className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-6">
      <h3 className="text-xl font-bold text-[#1A0A00] mb-6">Nutrition Info</h3>
      
      <div className="flex flex-col items-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={2}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <div className="text-center mt-4">
          <p className="text-[#A07050] text-sm mb-1">Total Calories</p>
          <p className="text-4xl font-bold text-[#E8351A]">{calories}</p>
          <p className="text-xs text-[#A07050]">per serving</p>
        </div>
      </div>

      {/* Nutrition Stats */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        <div className="bg-[#FFF8E1] rounded-lg p-3 text-center border-2 border-[#FFB800]">
          <p className="text-xs text-[#A07050] mb-1">Protein</p>
          <p className="font-bold text-[#1A0A00] text-lg">
            {Math.round((nutrition.protein || 0) * servings)}g
          </p>
        </div>
        <div className="bg-[#FFEDE9] rounded-lg p-3 text-center border-2 border-[#E8351A]">
          <p className="text-xs text-[#A07050] mb-1">Carbs</p>
          <p className="font-bold text-[#1A0A00] text-lg">
            {Math.round((nutrition.carbs || 0) * servings)}g
          </p>
        </div>
        <div className="bg-[#E8F5E9] rounded-lg p-3 text-center border-2 border-[#4CAF50]">
          <p className="text-xs text-[#A07050] mb-1">Fat</p>
          <p className="font-bold text-[#1A0A00] text-lg">
            {Math.round((nutrition.fat || 0) * servings)}g
          </p>
        </div>
      </div>
    </div>
  );
};

export default NutritionChart;
