import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Strategies from './pages/Strategies';
import Login from './pages/Login';
import Register from './pages/Register';
import MarketUpdates from './pages/MarketUpdates';
import Home from './pages/Home';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/Home" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-white via-yellow-50 to-yellow-100">
          <Navbar />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-8"
          >
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/strategies"
                element={
                  <PrivateRoute>
                    <Strategies />
                  </PrivateRoute>
                }
              />
              <Route
                path="/market-updates"
                element={
                  <PrivateRoute>
                    <MarketUpdates />
                  </PrivateRoute>
                }
              />
            </Routes>
          </motion.div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;