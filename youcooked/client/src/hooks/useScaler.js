import { useState, useMemo } from 'react';

export const useScaler = (baseRecipe, baseServings = 1) => {
  const [servings, setServings] = useState(baseServings);

  const scaledIngredients = useMemo(() => {
    if (!baseRecipe.ingredients) return [];
    const scale = servings / baseServings;
    
    return baseRecipe.ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * scale
    }));
  }, [servings, baseRecipe, baseServings]);

  const convertUnits = (value, fromUnit, toUnit, unitSystem = 'metric') => {
    // Placeholder for unit conversion logic
    return value;
  };

  return { servings, setServings, scaledIngredients, convertUnits };
};
