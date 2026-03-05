const express = require('express');
const { body, query, validationResult } = require('express-validator');
const Recipe = require('../models/Recipe');
const authGuard = require('../middleware/authGuard');

const router = express.Router();

// Get all recipes with search, filter, and pagination
router.get('/', [
  query('search').optional().isString(),
  query('cuisine').optional().isString(),
  query('difficulty').optional().isIn(['beginner', 'home', 'confident', 'chef']),
  query('tags').optional().isString(),
  query('page').optional().isInt({ min: 1 }).toInt(),
  query('limit').optional().isInt({ min: 1, max: 100 }).toInt()
], async (req, res, next) => {
  try {
    const { search, cuisine, difficulty, tags, page = 1, limit = 20 } = req.query;
    const query = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    if (cuisine) query.cuisine = cuisine;
    if (difficulty) query.difficulty = difficulty;
    if (tags) query.tags = { $in: tags.split(',') };

    const skip = (page - 1) * limit;
    const recipes = await Recipe.find(query)
      .populate('created_by', 'name')
      .skip(skip)
      .limit(limit);

    const total = await Recipe.countDocuments(query);

    res.json({
      recipes,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    next(error);
  }
});

// Get single recipe
router.get('/:id', async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('created_by', 'name');
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    next(error);
  }
});

// Create recipe (protected)
router.post('/', authGuard, [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').optional().isString(),
  body('ingredients').isArray().withMessage('Ingredients must be an array'),
  body('steps').isArray().withMessage('Steps must be an array'),
  body('servings').isInt({ min: 1 }).toInt(),
  body('difficulty').isIn(['beginner', 'home', 'confident', 'chef']),
  body('cuisine').optional().isString(),
  body('tags').optional().isArray()
], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const recipe = await Recipe.create({
      ...req.body,
      created_by: req.user.id
    });

    res.status(201).json(recipe);
  } catch (error) {
    next(error);
  }
});

// Update recipe (protected, owner only)
router.put('/:id', authGuard, async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.created_by.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to update this recipe' });
    }

    const updated = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.json(updated);
  } catch (error) {
    next(error);
  }
});

// Delete recipe (protected, owner only)
router.delete('/:id', authGuard, async (req, res, next) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    if (recipe.created_by.toString() !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to delete this recipe' });
    }

    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: 'Recipe deleted' });
  } catch (error) {
    next(error);
  }
});

// Rate recipe (protected)
router.post('/:id/rate', authGuard, [
  body('rating').isInt({ min: 1, max: 5 }).withMessage('Rating must be between 1 and 5')
], async (req, res, next) => {
  try {
    const { rating } = req.body;
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    // Simple rating calculation
    recipe.avg_rating = (recipe.avg_rating * recipe.ratings_count + rating) / (recipe.ratings_count + 1);
    recipe.ratings_count += 1;

    await recipe.save();
    res.json({ message: 'Rating added', recipe });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
