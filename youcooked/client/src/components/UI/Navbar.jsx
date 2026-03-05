import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';

const Navbar = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#E8351A] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 text-2xl font-bold">
            <span className="text-white">You</span>
            <span className="text-[#FFB800]">Cooked</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center flex-1 ml-12">
            <Link to="/explore" className="text-white opacity-100 hover:opacity-100 font-medium text-sm">
              Explore
            </Link>
            <Link to="/cookbook" className="text-white opacity-100 hover:opacity-100 font-medium text-sm">
              Cookbook
            </Link>
            <Link to="/egg-guide" className="text-white opacity-100 hover:opacity-100 font-medium text-sm">
              Egg Guide
            </Link>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center gap-2 bg-white/20 border border-white/40 rounded-full px-4 py-2 flex-1 mx-6">
            <Search size={18} className="text-white/60" />
            <input
              type="text"
              placeholder="Search recipes..."
              className="bg-transparent text-white placeholder-white/60 outline-none text-sm w-full"
            />
          </div>

          {/* User Menu */}
          <div className="hidden md:flex gap-4 items-center">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="w-10 h-10 rounded-full bg-[#FFB800] text-[#1A0A00] flex items-center justify-center font-bold font-semibold"
                >
                  {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                </Link>
                <button
                  onClick={onLogout}
                  className="text-white text-sm hover:opacity-80 transition-opacity"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-[#FFB800] text-[#1A0A00] px-4 py-2 rounded-full hover:bg-[#FFC933] font-semibold text-sm transition-colors"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link to="/explore" className="text-white hover:opacity-80 font-medium">
              Explore
            </Link>
            <Link to="/cookbook" className="text-white hover:opacity-80 font-medium">
              Cookbook
            </Link>
            <Link to="/egg-guide" className="text-white hover:opacity-80 font-medium">
              Egg Guide
            </Link>
            {user ? (
              <>
                <Link to="/profile" className="text-white hover:opacity-80 font-medium">
                  Profile
                </Link>
                <button
                  onClick={() => {
                    onLogout();
                    setIsOpen(false);
                  }}
                  className="text-white hover:opacity-80 font-medium text-left"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/auth"
                className="bg-[#FFB800] text-[#1A0A00] px-4 py-2 rounded-full font-semibold text-center"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
