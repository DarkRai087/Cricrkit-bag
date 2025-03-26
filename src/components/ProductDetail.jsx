import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProduct } from '../hooks/useProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading, error } = useProduct(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  if (loading) return <div className="container mx-auto p-6 text-center text-gray-600">Loading...</div>;
  if (error) return <div className="container mx-auto p-6 text-center text-red-500">Error: {error}</div>;
  if (!product) return <div className="container mx-auto p-6 text-center text-gray-600">Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  const rating = product.rating || 4.94;
  const productImage = product.thumbnail || 'https://via.placeholder.com/400?text=No+Image';

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← Back to Products
      </Link>
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md p-6 gap-6">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={imageError ? 'https://via.placeholder.com/400?text=Image+Not+Found' : productImage}
            alt={product.title}
            className="w-full h-96 object-contain rounded-lg"
            onError={() => setImageError(true)}
          />
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.title}</h1>
          <div className="flex items-center mb-4">
            <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded mr-2">
              {product.category}
            </span>
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}
                />
              ))}
              <span className="ml-1 text-gray-600">{rating}/5</span>
            </div>
          </div>
          <p className="text-2xl font-bold text-blue-600 mb-4">₹{product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
            <button
              onClick={handleViewCart}
              className="flex-1 border border-blue-500 text-blue-500 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;