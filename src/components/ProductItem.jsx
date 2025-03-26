import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <Link to={`/product/₹{product.id}`}>
        <div className="relative">
          <img
            src={product.thumbnail || 'https://via.placeholder.com/400?text=No+Image'}
            alt={product.title}
            className="w-full h-56 object-contain p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Product Details */}
      <div className="p-4">
        <Link to={`/product/₹{product.id}`}>
          <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors line-clamp-1">
            {product.title}
          </h2>
        </Link>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
        <p className="text-xl font-bold text-blue-600 mt-2">₹{product.price.toFixed(2)}</p>

        {/* Buttons */}
        <div className="mt-4 flex space-x-3">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
          <Link
            to={`/product/₹{product.id}`}
            className="flex-1 text-center border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-50 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;