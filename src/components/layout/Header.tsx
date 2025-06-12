import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Heart, Menu, X, User } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getTotalItems } = useCart();
  const { wishlist } = useWishlist();
  const { user, signOut } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isLandingPage = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isLandingPage ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className={`text-2xl font-bold flex items-center transition-colors ${
          isScrolled || !isLandingPage ? 'text-emerald-800' : 'text-white'
        }`}>
          <span className="mr-2">宠物项圈</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/home" 
            className={`transition-colors ${
              isScrolled || !isLandingPage 
                ? 'text-gray-700 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-300'
            }`}
          >
            首页
          </Link>
          <Link 
            to="/shop" 
            className={`transition-colors ${
              isScrolled || !isLandingPage 
                ? 'text-gray-700 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-300'
            }`}
          >
            商城
          </Link>
          <Link 
            to="/collections" 
            className={`transition-colors ${
              isScrolled || !isLandingPage 
                ? 'text-gray-700 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-300'
            }`}
          >
            系列
          </Link>
          <Link 
            to="/collar-guide" 
            className={`transition-colors ${
              isScrolled || !isLandingPage 
                ? 'text-gray-700 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-300'
            }`}
          >
            选择指南
          </Link>
          <Link 
            to="/product-selector" 
            className={`transition-colors ${
              isScrolled || !isLandingPage 
                ? 'text-gray-700 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-300'
            }`}
          >
            智能向导
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors ${
              isScrolled || !isLandingPage 
                ? 'text-gray-700 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-300'
            }`}
          >
            关于我们
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Link 
            to="/search" 
            className={`transition-colors ${
              isScrolled || !isLandingPage 
                ? 'text-gray-700 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-300'
            }`}
          >
            <Search size={20} />
          </Link>
          <Link 
            to="/wishlist" 
            className={`relative transition-colors ${
              isScrolled || !isLandingPage 
                ? 'text-gray-700 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-300'
            }`}
          >
            <Heart size={20} />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link 
            to="/cart" 
            className={`relative transition-colors ${
              isScrolled || !isLandingPage 
                ? 'text-gray-700 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-300'
            }`}
          >
            <ShoppingBag size={20} />
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getTotalItems()}
              </span>
            )}
          </Link>
          {user ? (
            <div className="relative group">
              <button className={`transition-colors ${
                isScrolled || !isLandingPage 
                  ? 'text-gray-700 hover:text-emerald-700' 
                  : 'text-white hover:text-emerald-300'
              }`}>
                <User size={20} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                <button
                  onClick={() => signOut()}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  退出登录
                </button>
              </div>
            </div>
          ) : (
            <Link 
              to="/login" 
              className={`transition-colors ${
                isScrolled || !isLandingPage 
                  ? 'text-gray-700 hover:text-emerald-700' 
                  : 'text-white hover:text-emerald-300'
              }`}
            >
              <User size={20} />
            </Link>
          )}
          <button 
            className={`md:hidden transition-colors ${
              isScrolled || !isLandingPage 
                ? 'text-gray-700 hover:text-emerald-700' 
                : 'text-white hover:text-emerald-300'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/home" 
              className="text-gray-700 hover:text-emerald-700 transition-colors py-2"
            >
              首页
            </Link>
            <Link 
              to="/shop" 
              className="text-gray-700 hover:text-emerald-700 transition-colors py-2"
            >
              商城
            </Link>
            <Link 
              to="/collections" 
              className="text-gray-700 hover:text-emerald-700 transition-colors py-2"
            >
              系列
            </Link>
            <Link 
              to="/collar-guide" 
              className="text-gray-700 hover:text-emerald-700 transition-colors py-2"
            >
              选择指南
            </Link>
            <Link 
              to="/product-selector" 
              className="text-gray-700 hover:text-emerald-700 transition-colors py-2"
            >
              智能向导
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-emerald-700 transition-colors py-2"
            >
              关于我们
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;