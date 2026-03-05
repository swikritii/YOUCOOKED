import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Red */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="hidden md:flex w-1/2 bg-[#E8351A] text-white flex-col justify-center items-center p-12 relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 text-6xl flex flex-wrap items-center justify-center gap-8 overflow-hidden">
          🍳 🍝 🥗 🥑 🥞 🥔 🍅 🧅
        </div>

        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl font-bold mb-4"
          >
            You<span className="text-[#FFB800]">Cooked</span>
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-semibold mb-2"
          >
            Cook Smarter
          </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl opacity-90 mb-12"
          >
            Eat Better
          </motion.p>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg opacity-80"
          >
            Master recipes, track streaks, earn badges, and become a home chef.
          </motion.p>
        </div>
      </motion.div>

      {/* Right Panel - Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-full md:w-1/2 bg-white flex items-center justify-center p-8"
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-[#1A0A00] mb-2 text-center">
              {isLogin ? 'Welcome Back' : 'Join YouCooked'}
            </h2>
            <p className="text-[#A07050] text-center mb-8">
              {isLogin
                ? 'Sign in to your account'
                : 'Create an account to start cooking'}
            </p>

            {/* Toggle Buttons */}
            <div className="flex gap-2 mb-8 bg-[#FFF8E1] p-1 rounded-full">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 rounded-full font-semibold transition-all ${
                  isLogin
                    ? 'bg-[#FFB800] text-[#1A0A00]'
                    : 'text-[#5C2D00] hover:opacity-80'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 rounded-full font-semibold transition-all ${
                  !isLogin
                    ? 'bg-[#FFB800] text-[#1A0A00]'
                    : 'text-[#5C2D00] hover:opacity-80'
                }`}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-[#1A0A00] font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border-2 border-[#FFEDE9] rounded-lg focus:outline-none focus:border-[#E8351A] text-[#5C2D00] placeholder-[#A07050]"
                  />
                </div>
              )}

              <div>
                <label className="block text-[#1A0A00] font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-[#FFEDE9] rounded-lg focus:outline-none focus:border-[#E8351A] text-[#5C2D00] placeholder-[#A07050]"
                />
              </div>

              <div>
                <label className="block text-[#1A0A00] font-semibold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 border-2 border-[#FFEDE9] rounded-lg focus:outline-none focus:border-[#E8351A] text-[#5C2D00] placeholder-[#A07050]"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 text-lg font-bold mt-6"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            {isLogin && (
              <p className="text-center text-[#A07050] mt-6 text-sm">
                Don't have an account?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-[#E8351A] font-semibold hover:text-[#FF5733]"
                >
                  Sign up here
                </button>
              </p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
