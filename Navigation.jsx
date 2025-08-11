import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/menu', label: 'Menu' },  
    { path: '/about', label: 'À propos' },
    { path: '/contact', label: 'Contact' }
  ];

  const handleCall = () => {
    window.location.href = `tel:${restaurantInfo.phone}`;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
              La Meliana
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium ${
                  location.pathname === item.path ? 'text-red-600' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Call Button */}
            <button
              onClick={handleCall}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 transform hover:scale-105"
            >
              <Phone size={18} />
              <span>Commander</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-gray-700 hover:text-red-600 transition-colors duration-300 font-medium ${
                    location.pathname === item.path ? 'text-red-600' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={handleCall}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center space-x-2 w-full"
              >
                <Phone size={18} />
                <span>Commander</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;