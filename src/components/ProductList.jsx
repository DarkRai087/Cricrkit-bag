import { useProducts } from '../hooks/useProducts';
import ProductItem from './ProductItem';

const ProductList = () => {
  const { products, loading, error } = useProducts();

  console.log('Products:', products); // Debug log

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.length === 0 ? (
        <div>No products available</div>
      ) : (
        products.map(product => (
          <ProductItem key={product._id || product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;