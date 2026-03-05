import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setTags([...tags, inputValue.toLowerCase()]);
      setInputValue('');
    }
  };

  const handleRemoveTag = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSearch = () => {
    onSearch({ query, tags });
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#FFEDE9] p-6 shadow-md">
      <div className="mb-6">
        <label className="block text-[#1A0A00] font-bold mb-2">Search Recipes</label>
        <input
          type="text"
          placeholder="Search by name or ingredient..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-3 border-2 border-[#FFEDE9] rounded-lg focus:outline-none focus:border-[#E8351A] text-[#5C2D00] placeholder-[#A07050]"
        />
      </div>

      <div className="mb-6">
        <label className="block text-[#1A0A00] font-bold mb-2">Add Tags</label>
        <div className="flex gap-2 flex-wrap mb-3">
          {tags.map((tag) => (
            <motion.div
              key={tag}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="bg-[#E8351A] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 font-semibold"
            >
              {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="hover:opacity-80"
              >
                <X size={16} />
              </button>
            </motion.div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Add ingredient tags (press Enter)..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddTag}
          className="w-full px-4 py-3 border-2 border-[#FFEDE9] rounded-lg focus:outline-none focus:border-[#E8351A] text-[#5C2D00] placeholder-[#A07050]"
        />
      </div>

      <button
        onClick={handleSearch}
        className="w-full btn-primary py-3 text-lg font-bold"
      >
        Search Recipes
      </button>
    </div>
  );
};

export default SearchBar;
