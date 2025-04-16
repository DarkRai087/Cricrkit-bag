import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in by verifying the presence of a token
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set to true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    setIsLoggedIn(false); // Update the state
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-wide hover:text-gray-200 transition-colors">
          CricKit-Bag
        </Link>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          {isLoggedIn ? (
            <div className="relative group">
              {/* Avatar */}
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white hover:border-gray-300 transition-all"
              />
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-lg hidden group-hover:block">
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/signup"
                className="text-lg font-medium hover:text-gray-200 transition-colors"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="text-lg font-medium hover:text-gray-200 transition-colors"
              >
                Login
              </Link>
            </>
          )}

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-2xl hover:text-gray-200 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;