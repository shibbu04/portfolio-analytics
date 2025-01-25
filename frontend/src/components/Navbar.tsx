import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BarChart2, TrendingUp, Globe, LogOut, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-lg"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <BarChart2 className="h-8 w-8 text-yellow-600" />
            <span className="text-xl font-bold text-gray-800">
              Portfolio Analytics
            </span>
          </Link>

          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center text-gray-800 focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/strategies"
                  className="px-3 py-2 rounded-md text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                >
                  <TrendingUp className="h-5 w-5 mr-1" /> Strategies
                </Link>
                <Link
                  to="/market-updates"
                  className="px-3 py-2 rounded-md text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                >
                  <Globe className="h-5 w-5 mr-1" /> Market Updates
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-md text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-5 w-5 mr-1" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="px-3 py-2 rounded-md text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-md mt-2">
            {isAuthenticated ? (
              <div className="flex flex-col space-y-2 py-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                  onClick={toggleMenu}
                >
                  Dashboard
                </Link>
                <Link
                  to="/strategies"
                  className="block px-4 py-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                  onClick={toggleMenu}
                >
                  <TrendingUp className="h-5 w-5 inline-block mr-1" /> Strategies
                </Link>
                <Link
                  to="/market-updates"
                  className="block px-4 py-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                  onClick={toggleMenu}
                >
                  <Globe className="h-5 w-5 inline-block mr-1" /> Market Updates
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    toggleMenu();
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="h-5 w-5 inline-block mr-1" /> Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 py-2">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 transition-colors"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
