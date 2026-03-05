import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './context/AuthContext';

import Navbar from './components/UI/Navbar';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import ExplorePage from './pages/ExplorePage';
import CookbookPage from './pages/CookbookPage';
import ProfilePage from './pages/ProfilePage';
import AuthPage from './pages/AuthPage';
import EggGuidePage from './pages/EggGuidePage';

const ProtectedRoute = ({ children }) => {
  const { token, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return token ? children : <Navigate to="/auth" />;
};

const AppRoutes = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      {user && <Navbar user={user} onLogout={logout} />}
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/egg-guide" element={<EggGuidePage />} />
        
        <Route
          path="/cookbook"
          element={
            <ProtectedRoute>
              <CookbookPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
