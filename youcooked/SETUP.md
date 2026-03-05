# YouCooked Setup Instructions

## ✅ Project Setup Complete!

Your complete MERN stack **YouCooked** project has been initialized with all folders, files, and dependencies installed.

## 🚀 Quick Start

### Both servers are ready to run:

1. **Backend Server** (currently running on http://localhost:5000)
   ```bash
   cd server
   npm run dev
   ```

2. **Frontend Server** (currently running on http://localhost:5173)
   ```bash
   cd client
   npm run dev
   ```

## ⚙️ Configuration Required

Before fully using the app, you need to set up environment variables:

### Backend Setup
1. Create `server/.env` from the example:
   ```bash
   cp server/.env.example server/.env
   ```

2. Edit `server/.env` and add your values:
   - **MONGODB_URI**: MongoDB connection string (local or Atlas)
     - Example: `mongodb://localhost:27017/youcooked`
   - **JWT_SECRET**: Any secure random string
   - **JWT_EXPIRES_IN**: Token expiration time (e.g., `7d`)
   - **CLOUDINARY_***: Cloudinary API credentials (for image uploads)
   - **EDAMAM_***: Edamam API credentials (for nutrition data)
   - **YOUTUBE_API_KEY**: YouTube Data API v3 key
   - **CLIENT_URL**: Frontend URL (default: `http://localhost:5173`)

### Frontend Setup
1. Create `client/.env` from the example:
   ```bash
   cp client/.env.example client/.env
   ```

2. The default values should work for local development:
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

## 📊 Database Seeding

Once MongoDB is running and `.env` is configured:

```bash
cd server
npm run seed
```

This will insert 6 sample recipes:
- Boiled Egg
- Poached Egg
- Fried Egg
- Pasta Aglio e Olio
- Avocado Toast
- Banana Pancakes

## 📁 Project Structure

```
youcooked/
├── client/                    # React + Vite frontend
│   ├── src/
│   │   ├── pages/            # 7 page components
│   │   ├── components/       # 12+ component files
│   │   ├── context/          # AuthContext
│   │   ├── hooks/            # useTimer, useScaler
│   │   ├── api/              # API clients
│   │   └── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
│
└── server/                    # Node + Express backend
    ├── models/               # 4 Mongoose models
    ├── routes/               # Auth, recipes, cookbook, API
    ├── middleware/           # Auth, error handling, uploads
    ├── server.js             # Main entry point
    ├── seed.js               # Database seeding
    ├── package.json
    └── .env.example
```

## 🎨 Features Included

✅ **Frontend**
- 7 Pages: Home, Recipe Detail, Explore, Cookbook, Profile, Auth, Egg Guide
- 12+ Components: Recipe cards, timers, nutrition charts, forms, etc.
- Tailwind CSS with custom warm food-inspired theme
- Framer Motion animations
- React Router v6 navigation
- Axios with JWT interceptors
- React Hook Form for forms
- Recharts for visualizations

✅ **Backend**
- Express server with CORS
- 4 Mongoose models with full schemas
- Authentication (JWT + bcrypt)
- Recipe CRUD operations with search/filter
- Cookbook management
- Ingredient scaling
- Nutrition API integration
- YouTube metadata fetching
- Timer message system
- Error handling & validation

## 📝 API Routes Ready

All 18 API endpoints are implemented:
- 3 Auth endpoints
- 5 Recipe endpoints
- 5 Cookbook endpoints
- 3 External API endpoints

## 🔍 Testing the Setup

### Terminal 1 - Backend
```bash
cd server
npm run dev
# Watch for: "Server running on port 5000"
```

### Terminal 2 - Frontend
```bash
cd client
npm run dev
# Watch for: "VITE v4.5.14 ready in XXX ms"
```

Both should be running with no errors once you:
1. Set up `.env` files with your API keys
2. Connect to MongoDB

## 🚢 Production Build

```bash
# Frontend
cd client
npm run build

# Backend
cd server
NODE_ENV=production npm start
```

## 📚 Documentation

See `README.md` in the root directory for:
- Detailed tech stack info
- All API endpoint documentation
- Database schema details
- Contributing guidelines

## 🎯 Next Steps

1. ✅ Install MongoDB (local or use MongoDB Atlas)
2. ✅ Create `.env` files with your credentials
3. ✅ Run `npm run seed` to populate sample recipes
4. ✅ Test authentication and CRUD operations
5. ✅ Customize the theme colors if desired
6. ✅ Deploy to your hosting platform

---

**Cook smarter. Eat better. You cooked.** 🍳✨
