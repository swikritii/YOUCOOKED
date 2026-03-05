require('dotenv').config();
const mongoose = require('mongoose');
const Recipe = require('./models/Recipe');
const TimerMessage = require('./models/TimerMessage');

const sampleRecipes = [
  {
    title: 'Boiled Egg',
    description: 'Perfect soft or hard boiled eggs',
    thumbnail: 'https://via.placeholder.com/300x200?text=Boiled+Egg',
    ingredients: [
      { name: 'Egg', quantity: 1, unit: 'whole', notes: 'Room temperature' }
    ],
    steps: [
      { instruction: 'Bring water to a boil', timer_seconds: 300 },
      { instruction: 'Gently place egg in boiling water', timer_seconds: 0 },
      { instruction: 'For soft boiled: cook for 6-7 minutes', timer_seconds: 360 },
      { instruction: 'For hard boiled: cook for 12 minutes', timer_seconds: 720 },
      { instruction: 'Transfer to ice bath to cool', timer_seconds: 300 }
    ],
    servings: 1,
    difficulty: 'beginner',
    cuisine: 'International',
    tags: ['egg', 'breakfast', 'quick', 'protein'],
    nutrition: { calories: 70, protein: 6, carbs: 1, fat: 5 }
  },
  {
    title: 'Poached Egg',
    description: 'Delicate poached eggs with silky centers',
    thumbnail: 'https://via.placeholder.com/300x200?text=Poached+Egg',
    ingredients: [
      { name: 'Egg', quantity: 1, unit: 'whole' },
      { name: 'Vinegar', quantity: 1, unit: 'tbsp', notes: 'White vinegar' }
    ],
    steps: [
      { instruction: 'Bring water with vinegar to simmer', timer_seconds: 300 },
      { instruction: 'Create gentle whirlpool with spoon', timer_seconds: 30 },
      { instruction: 'Slide egg into center', timer_seconds: 0 },
      { instruction: 'Cook for 3-4 minutes until set', timer_seconds: 210 },
      { instruction: 'Remove with slotted spoon', timer_seconds: 30 }
    ],
    servings: 1,
    difficulty: 'home',
    cuisine: 'International',
    tags: ['egg', 'breakfast', 'elegant'],
    nutrition: { calories: 70, protein: 6, carbs: 1, fat: 5 }
  },
  {
    title: 'Fried Egg',
    description: 'Simple and satisfying fried eggs',
    thumbnail: 'https://via.placeholder.com/300x200?text=Fried+Egg',
    ingredients: [
      { name: 'Egg', quantity: 1, unit: 'whole' },
      { name: 'Butter', quantity: 1, unit: 'tbsp' },
      { name: 'Salt', quantity: 'to taste', unit: '' },
      { name: 'Pepper', quantity: 'to taste', unit: '' }
    ],
    steps: [
      { instruction: 'Heat butter in pan over medium heat', timer_seconds: 120 },
      { instruction: 'Crack egg into pan', timer_seconds: 0 },
      { instruction: 'Cook sunny side up for 3-4 minutes', timer_seconds: 210 },
      { instruction: 'Season with salt and pepper', timer_seconds: 30 },
      { instruction: 'Serve immediately', timer_seconds: 0 }
    ],
    servings: 1,
    difficulty: 'beginner',
    cuisine: 'International',
    tags: ['egg', 'breakfast', 'quick'],
    nutrition: { calories: 100, protein: 6, carbs: 1, fat: 8 }
  },
  {
    title: 'Pasta Aglio e Olio',
    description: 'Classic Italian pasta with garlic and olive oil',
    thumbnail: 'https://via.placeholder.com/300x200?text=Pasta+Aglio+e+Olio',
    ingredients: [
      { name: 'Spaghetti', quantity: 400, unit: 'g' },
      { name: 'Garlic', quantity: 6, unit: 'cloves', notes: 'Sliced' },
      { name: 'Olive oil', quantity: 120, unit: 'ml' },
      { name: 'Red chili', quantity: 1, unit: 'whole', notes: 'Optional' },
      { name: 'Parsley', quantity: 30, unit: 'g', notes: 'Fresh' }
    ],
    steps: [
      { instruction: 'Boil water and cook pasta', timer_seconds: 600 },
      { instruction: 'Heat olive oil in large pan', timer_seconds: 120 },
      { instruction: 'Add sliced garlic and chili', timer_seconds: 180 },
      { instruction: 'Add cooked pasta to pan', timer_seconds: 60 },
      { instruction: 'Toss and garnish with parsley', timer_seconds: 60 }
    ],
    servings: 2,
    difficulty: 'beginner',
    cuisine: 'Italian',
    tags: ['pasta', 'quick', 'vegetarian', 'dinner'],
    nutrition: { calories: 480, protein: 16, carbs: 68, fat: 16 }
  },
  {
    title: 'Avocado Toast',
    description: 'Creamy avocado on crispy toast',
    thumbnail: 'https://via.placeholder.com/300x200?text=Avocado+Toast',
    ingredients: [
      { name: 'Bread', quantity: 2, unit: 'slices', notes: 'Sourdough or whole grain' },
      { name: 'Avocado', quantity: 1, unit: 'whole' },
      { name: 'Lemon juice', quantity: 15, unit: 'ml' },
      { name: 'Red pepper flakes', quantity: 'pinch', unit: '' },
      { name: 'Salt', quantity: 'to taste', unit: '' }
    ],
    steps: [
      { instruction: 'Toast bread until golden', timer_seconds: 180 },
      { instruction: 'Cut avocado in half and remove pit', timer_seconds: 60 },
      { instruction: 'Scoop avocado and mash on toast', timer_seconds: 60 },
      { instruction: 'Drizzle with lemon juice', timer_seconds: 30 },
      { instruction: 'Season with salt and pepper flakes', timer_seconds: 30 }
    ],
    servings: 1,
    difficulty: 'beginner',
    cuisine: 'Modern',
    tags: ['breakfast', 'quick', 'vegetarian', 'healthy'],
    nutrition: { calories: 320, protein: 12, carbs: 35, fat: 15 }
  },
  {
    title: 'Banana Pancakes',
    description: 'Fluffy pancakes naturally sweetened with banana',
    thumbnail: 'https://via.placeholder.com/300x200?text=Banana+Pancakes',
    ingredients: [
      { name: 'Banana', quantity: 2, unit: 'whole', notes: 'Ripe' },
      { name: 'Egg', quantity: 2, unit: 'whole' },
      { name: 'Vanilla extract', quantity: 5, unit: 'ml' },
      { name: 'Cinnamon', quantity: 3, unit: 'g' },
      { name: 'Butter', quantity: 15, unit: 'g', notes: 'For cooking' }
    ],
    steps: [
      { instruction: 'Mash bananas in a bowl', timer_seconds: 60 },
      { instruction: 'Beat in eggs and vanilla', timer_seconds: 120 },
      { instruction: 'Add cinnamon and mix', timer_seconds: 30 },
      { instruction: 'Heat butter in pan over medium heat', timer_seconds: 120 },
      { instruction: 'Pour batter and cook 2-3 minutes per side', timer_seconds: 300 },
      { instruction: 'Serve warm', timer_seconds: 0 }
    ],
    servings: 2,
    difficulty: 'beginner',
    cuisine: 'American',
    tags: ['breakfast', 'sweet', 'quick'],
    nutrition: { calories: 240, protein: 8, carbs: 35, fat: 6 }
  }
];

const timerMessages = [
  {
    dish_tag: 'egg',
    messages: [
      '{name}, your boiled egg is ready! Eat well, grow strong!',
      '{name}, perfect egg achieved — you cooked!',
      '{name}, your egg awaits. Time to feast!',
      'Egg done, {name}! Another culinary victory!',
      '{name}, golden and ready — egg success!'
    ]
  },
  {
    dish_tag: 'pasta',
    messages: [
      '{name}, pasta is al dente! You nailed it!',
      'Pasta is done, {name}! Mangia bene!',
      '{name}, your pasta awaits. Bellissimo!',
      'Perfect pasta, {name}! You cooked!',
      '{name}, time for a carb victory feast!'
    ]
  },
  {
    dish_tag: 'breakfast',
    messages: [
      'Good morning, {name}! Your breakfast is ready!',
      '{name}, rise and shine — breakfast time!',
      'Breakfast is served, {name}! Start strong!',
      '{name}, fuel up! Your breakfast awaits!',
      'Morning, {name}! Time to breakfast like you cooked!'
    ]
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Recipe.deleteMany({});
    await TimerMessage.deleteMany({});

    // Insert sample recipes
    const createdRecipes = await Recipe.insertMany(sampleRecipes);
    console.log(`✓ Inserted ${createdRecipes.length} sample recipes`);

    // Insert timer messages
    const createdMessages = await TimerMessage.insertMany(timerMessages);
    console.log(`✓ Inserted ${createdMessages.length} timer message sets`);

    console.log('✓ Seed completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

seed();
