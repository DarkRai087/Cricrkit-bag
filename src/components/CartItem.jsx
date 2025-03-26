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
    <div className="flex items-center border-b pb-4">
      <img 
        src={item.thumbnail} 
        alt={item.title} 
        className="w-24 h-24 object-cover mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-gray-600">₹{item.price}</p>
      </div>
      <div className="flex items-center">
        <button 
          onClick={() => handleQuantityChange(item.quantity - 1)}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          -
        </button>
        <span className="mx-4">{item.quantity}</span>
        <button 
          onClick={() => handleQuantityChange(item.quantity + 1)}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          +
        </button>
      </div>
      <div className="ml-4">
        <span className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</span>
      </div>
      <button 
        onClick={handleRemove}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;