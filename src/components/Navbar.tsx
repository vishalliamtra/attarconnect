import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Search, Globe, Droplets } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/artisans', label: 'Artisans' },
    { to: '/b2b', label: 'B2B Portal' },
    { to: '/knowledge', label: 'Knowledge Hub' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg border-b border-amber-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 via-saffron-500 to-sandalwood-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Droplets className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 font-serif">AttarConnect</span>
              <span className="text-xs text-amber-600 -mt-1 font-hindi">अत्तर कनेक्ट</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 relative ${
                  isActive(link.to)
                    ? 'text-amber-600'
                    : 'text-gray-700 hover:text-amber-600'
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-saffron-500 rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-amber-600 transition-colors hover:bg-amber-50 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-amber-600 transition-colors hover:bg-amber-50 rounded-full">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-amber-600 transition-colors hover:bg-amber-50 rounded-full">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-amber-600 transition-colors hover:bg-amber-50 rounded-full relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                3
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-amber-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                    isActive(link.to)
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;