import React from 'react';
import { motion } from 'framer-motion';
import { Video } from 'lucide-react';

const YouTubeCompanion = ({ youtubeUrl, recipeTitle }) => {
  if (!youtubeUrl) return null;

  // Extract video ID from various YouTube URL formats
  const extractVideoId = (url) => {
    if (!url) return null;
    
    // Try youtu.be format
    let match = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
    if (match) return match[1];
    
    // Try youtube.com watch?v= format
    match = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/);
    if (match) return match[1];
    
    // Try embed format
    match = url.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
    if (match) return match[1];
    
    return null;
  };

  const videoId = extractVideoId(youtubeUrl);

  if (!videoId) {
    return (
      <div className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-8 text-center">
        <Video size={48} className="mx-auto text-[#FFEDE9] mb-4" />
        <p className="text-[#A07050]">No video available for this recipe</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-2xl border-2 border-[#FFEDE9] overflow-hidden"
    >
      <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${recipeTitle} Video Tutorial`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-[#1A0A00] mb-2 flex items-center gap-2">
          <Video size={24} className="text-[#E8351A]" />
          Video Tutorial
        </h3>
        <p className="text-[#5C2D00]">
          Watch this video companion to see {recipeTitle} prepared step-by-step.
        </p>
      </div>
    </motion.div>
  );
};

export default YouTubeCompanion;
