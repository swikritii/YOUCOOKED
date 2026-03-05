const express = require('express');
const axios = require('axios');
const TimerMessage = require('../models/TimerMessage');

const router = express.Router();

// Proxy to Edamam API for nutrition
router.get('/nutrition', async (req, res, next) => {
  try {
    const { ingredients } = req.query;

    if (!ingredients) {
      return res.status(400).json({ message: 'Ingredients query parameter is required' });
    }

    const response = await axios.get('https://api.edamam.com/api/nutrition-data', {
      params: {
        app_id: process.env.EDAMAM_APP_ID,
        app_key: process.env.EDAMAM_APP_KEY,
        ingr: ingredients.split(',')
      }
    });

    res.json(response.data);
  } catch (error) {
    next(error);
  }
});

// Fetch YouTube video metadata
router.get('/youtube', async (req, res, next) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ message: 'URL query parameter is required' });
    }

    // Extract video ID from YouTube URL
    let videoId;
    const urlObj = new URL(url);
    
    if (urlObj.hostname.includes('youtube.com')) {
      videoId = urlObj.searchParams.get('v');
    } else if (urlObj.hostname.includes('youtu.be')) {
      videoId = urlObj.pathname.slice(1);
    }

    if (!videoId) {
      return res.status(400).json({ message: 'Invalid YouTube URL' });
    }

    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        id: videoId,
        key: process.env.YOUTUBE_API_KEY,
        part: 'snippet,contentDetails'
      }
    });

    res.json(response.data.items[0] || {});
  } catch (error) {
    next(error);
  }
});

// Get random timer message for a dish
router.get('/timer-messages/:dish_tag', async (req, res, next) => {
  try {
    const { dish_tag } = req.params;

    const timerMessage = await TimerMessage.findOne({ dish_tag });

    if (!timerMessage || !timerMessage.messages.length) {
      return res.status(404).json({ message: 'No messages found for this dish' });
    }

    const randomMessage = timerMessage.messages[
      Math.floor(Math.random() * timerMessage.messages.length)
    ];

    res.json({ dish_tag, message: randomMessage });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
