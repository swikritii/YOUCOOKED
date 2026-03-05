const express = require('express');
const { body, validationResult } = require('express-validator');
const Cookbook = require('../models/Cookbook');
const User = require('../models/User');
const authGuard = require('../middleware/authGuard');

const router = express.Router();

// Get user's saved recipes (protected)
router.get('/', authGuard, async (req, res, next) => {
  try {
    const saved = await Cookbook.find({ user_id: req.user.id })
      .populate('recipe_id');

    res.json(saved);
  } catch (error) {
    next(error);
  }
});

// Save recipe to cookbook (protected)
router.post('/:recipeId', authGuard, async (req, res, next) => {
  try {
    const existing = await Cookbook.findOne({
      user_id: req.user.id,
      recipe_id: req.params.recipeId
    });

    if (existing) {
      return res.status(400).json({ message: 'Recipe already saved' });
    }

    const saved = await Cookbook.create({
      user_id: req.user.id,
      recipe_id: req.params.recipeId
    });

    res.status(201).json(saved);
  } catch (error) {
    next(error);
  }
});

// Update notes/rating (protected)
router.put('/:recipeId', authGuard, [
  body('personal_notes').optional().isString(),
  body('user_rating').optional().isInt({ min: 1, max: 5 })
], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const saved = await Cookbook.findOneAndUpdate(
      { user_id: req.user.id, recipe_id: req.params.recipeId },
      req.body,
      { new: true }
    );

    if (!saved) {
      return res.status(404).json({ message: 'Recipe not found in cookbook' });
    }

    res.json(saved);
  } catch (error) {
    next(error);
  }
});

// Remove from cookbook (protected)
router.delete('/:recipeId', authGuard, async (req, res, next) => {
  try {
    const saved = await Cookbook.findOneAndDelete({
      user_id: req.user.id,
      recipe_id: req.params.recipeId
    });

    if (!saved) {
      return res.status(404).json({ message: 'Recipe not found in cookbook' });
    }

    res.json({ message: 'Recipe removed from cookbook' });
  } catch (error) {
    next(error);
  }
});

// Mark as cooked, update streak and XP (protected)
router.post('/:recipeId/cooked', authGuard, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const today = new Date().toDateString();
    const lastCookedDate = user.last_cooked_date ? new Date(user.last_cooked_date).toDateString() : null;

    // Update streak
    if (lastCookedDate !== today) {
      if (lastCookedDate === new Date(Date.now() - 86400000).toDateString()) {
        // Cooked yesterday, continue streak
        user.streak_count += 1;
      } else {
        // Reset streak
        user.streak_count = 1;
      }
      user.last_cooked_date = new Date();
    }

    // Add XP
    user.xp += 10;

    await user.save();

    const saved = await Cookbook.findOneAndUpdate(
      { user_id: req.user.id, recipe_id: req.params.recipeId },
      { 
        times_cooked: (await Cookbook.findOne({ user_id: req.user.id, recipe_id: req.params.recipeId }))?.times_cooked + 1 || 1,
        last_cooked: new Date()
      },
      { new: true, upsert: true }
    );

    res.json({
      message: 'Marked as cooked',
      user: { streak_count: user.streak_count, xp: user.xp },
      cookbook: saved
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
