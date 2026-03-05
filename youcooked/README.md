# YouCooked - Cook Smarter. Eat Better.

A modern web application for discovering, cooking, and tracking recipes. Built with the MERN stack (MongoDB, Express, React, Node.js).

## 🚀 Features

- **Recipe Discovery**: Search and filter recipes by cuisine, difficulty, and ingredients
- **Interactive Cooking**: Step-by-step guides with per-step timers and sound notifications
- **Ingredient Scaling**: Automatically scale recipe ingredients based on desired servings
- **Nutrition Tracking**: View nutritional information with interactive charts
- **Personal Cookbook**: Save favorite recipes with personal notes and ratings
- **Cooking Streak**: Track your consecutive cooking days and earn achievements
- **Video Companions**: Watch cooking tutorials alongside structured recipes
- **Interactive Egg Guide**: Master the art of cooking eggs perfectly
- **User Profiles**: Track your skill level, XP, and earned badges

## 📋 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS with custom warm food-inspired theme
- **Framer Motion** - Smooth animations and transitions
- **React Router v6** - Client-side routing
- **Axios** - HTTP client with JWT interceptors
- **Recharts** - Beautiful charts and visualizations
- **React Hook Form** - Efficient form handling
- **Plus Jakarta Sans** - Modern, clean typography

### Backend
- **Node.js + Express** - Server framework
- **MongoDB + Mongoose** - Database and ODM
- **JWT** - Authentication and authorization
- **bcryptjs** - Password hashing
- **Cloudinary** - Image upload and storage
- **multer** - File upload handling
- **express-validator** - Input validation
- **morgan** - HTTP request logging

## 🎨 Design System

### Color Palette
- **Warm Orange**: #FF6B35 (primary), #FF8C42 (secondary)
- **Cream White**: #FFF8F0 (background), #FFF3E8 (light)
- **Fresh Green**: #4CAF50, #81C784 (accents)
- **Warm Brown**: #8D6E63, #6D4C41 (text)
- **Warm Gray**: Various for secondary text and UI elements

## 📁 Project Structure

```
youcooked/
├── client/                          # React frontend
│   ├── src/
│   │   ├── pages/                  # Page components
│   │   ├── components/
│   │   │   ├── Recipe/            # Recipe-related components
│   │   │   ├── Timer/             # Timer components
│   │   │   ├── Cookbook/          # Cookbook components
│   │   │   ├── Profile/           # Profile components
│   │   │   └── UI/                # Shared UI components
│   │   ├── context/               # React context (Auth)
│   │   ├── hooks/                 # Custom hooks
│   │   ├── api/                   # API integration
│   │   ├── App.jsx                # Main app component
│   │   ├── main.jsx               # Entry point
│   │   └── index.css              # Global styles
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
│
└── server/                          # Express backend
    ├── models/                     # Mongoose schemas
    │   ├── User.js
    │   ├── Recipe.js
    │   ├── Cookbook.js
    │   └── TimerMessage.js
    ├── routes/                     # API routes
    │   ├── auth.js
    │   ├── recipes.js
    │   ├── cookbook.js
    │   └── externalApi.js
    ├── middleware/                 # Custom middleware
    │   ├── authGuard.js
    │   ├── errorHandler.js
    │   └── upload.js
    ├── server.js                   # Server entry point
    ├── seed.js                     # Database seeding
    ├── package.json
    └── .env.example
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB running locally or MongoDB Atlas connection string

### Installation

1. **Clone the repository**
   ```bash
   cd youcooked
   ```

2. **Setup Backend**
   ```bash
   cd server
   npm install
   
   # Create .env file from example
   cp .env.example .env
   
   # Edit .env with your configuration
   # MONGODB_URI, JWT_SECRET, CLOUDINARY_URL, etc.
   
   # Seed database with sample recipes
   npm run seed
   
   # Start development server
   npm run dev
   ```
   Server runs on `http://localhost:5000`

3. **Setup Frontend**
   ```bash
   cd ../client
   npm install
   
   # Create .env file from example
   cp .env.example .env
   
   # Start development server
   npm run dev
   ```
   Frontend runs on `http://localhost:5173`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (protected)

### Recipes
- `GET /api/recipes` - Get all recipes with search/filter/pagination
- `GET /api/recipes/:id` - Get single recipe
- `POST /api/recipes` - Create recipe (protected)
- `PUT /api/recipes/:id` - Update recipe (protected, owner only)
- `DELETE /api/recipes/:id` - Delete recipe (protected, owner only)
- `POST /api/recipes/:id/rate` - Rate recipe (protected)

### Cookbook
- `GET /api/cookbook` - Get user's saved recipes (protected)
- `POST /api/cookbook/:recipeId` - Save recipe (protected)
- `PUT /api/cookbook/:recipeId` - Update notes/rating (protected)
- `DELETE /api/cookbook/:recipeId` - Remove from cookbook (protected)
- `POST /api/cookbook/:recipeId/cooked` - Mark as cooked (protected)

### External APIs
- `GET /api/nutrition?ingredients=` - Edamam nutrition API proxy
- `GET /api/youtube?url=` - YouTube metadata fetcher
- `GET /api/timer-messages/:dish_tag` - Get random timer notifications

## 🗄️ Database Models

### User
- name, email, password_hash
- skill_level, streak_count, last_cooked_date, xp
- badges, calorie_goal, unit_preference
- created_at

### Recipe
- title, description, youtube_url, thumbnail
- ingredients (name, quantity, unit, notes)
- steps (instruction, timer_seconds)
- servings, difficulty, cuisine, tags
- nutrition (calories, protein, carbs, fat)
- created_by (user reference)
- avg_rating, ratings_count
- created_at

### Cookbook
- user_id, recipe_id
- personal_notes, times_cooked, last_cooked
- user_rating, saved_at

### TimerMessage
- dish_tag (unique)
- messages (array of notification strings)

## 🌱 Seeding the Database

The project includes 6 sample recipes:
1. **Boiled Egg** - Soft and hard boiled variations
2. **Poached Egg** - Delicate and elegant
3. **Fried Egg** - Sunny side up classic
4. **Pasta Aglio e Olio** - Italian classic
5. **Avocado Toast** - Modern breakfast
6. **Banana Pancakes** - Naturally sweet breakfast

Seed with: `npm run seed` in the server directory

## 🔐 Environment Variables

### Server (.env)
```
MONGODB_URI=mongodb://localhost:27017/youcooked
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
EDAMAM_APP_ID=your_edamam_id
EDAMAM_APP_KEY=your_edamam_key
YOUTUBE_API_KEY=your_youtube_key
PORT=5000
CLIENT_URL=http://localhost:5173
```

### Client (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## 📦 Building for Production

### Frontend
```bash
cd client
npm run build
npm run preview
```

### Backend
```bash
cd server
NODE_ENV=production npm start
```

## 🧪 Testing

Run development servers:
```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend
cd client && npm run dev
```

Both should start without errors and you can access the app at `http://localhost:5173`

## 🤝 Contributing

This is a learning project. Feel free to fork, modify, and improve!

## 📝 License

MIT

## 👨‍🍳 Features in Progress

- Real-time notifications
- Social recipe sharing
- Recipe recommendations
- Grocery list generation
- Meal planning
- Integration with grocery delivery services
- Mobile app version

---

**Cook smarter. Eat better. You cooked.** 🍳✨
