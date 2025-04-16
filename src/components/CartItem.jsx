import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <img
        src={item.thumbnail || 'https://via.placeholder.com/100?text=No+Image'}
        alt={item.title}
        className="w-20 h-20 object-contain rounded-md"
      />

      {/* Product Details */}
      <div className="flex-grow ml-4">
        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
        <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="px-3 py-1 bg-gray-200 text-gray-600 rounded-l-md hover:bg-gray-300 transition-colors"
        >
          -
        </button>
        <span className="px-4 py-1 text-gray-800 border-t border-b">{item.quantity}</span>
        <button
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r-md hover:bg-gray-300 transition-colors"
        >
          +
        </button>
      </div>

      {/* Total Price */}
      <div className="ml-4">
        <span className="text-lg font-bold text-gray-800">
          ₹{(item.price * item.quantity).toFixed(2)}
        </span>
      </div>

      {/* Remove Button */}
      <button
        onClick={handleRemove}
        className="ml-4 text-red-500 hover:text-red-600 font-medium transition-colors"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;