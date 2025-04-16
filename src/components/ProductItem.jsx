import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  console.log('Product:', product); // Debug log

  if (!product) return null;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <img
        src={product.thumbnail || 'https://via.placeholder.com/150'}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-blue-600 font-bold">₹{product.price.toFixed(2)}</p>
      <Link
        to={`/product/${product._id || product.id}`}
        className="block mt-4 text-center bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductItem;