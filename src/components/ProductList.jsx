import { useProducts } from '../hooks/useProducts';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <div className="container mx-auto p-6 text-center text-gray-600">Loading...</div>;
  if (error) return <div className="container mx-auto p-6 text-center text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Make your Dream Kit bag Now!</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;