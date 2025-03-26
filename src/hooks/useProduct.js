import { useState, useEffect } from 'react';
import cricketProducts from '../data/cricketProducts';

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Validate the id
        const parsedId = parseInt(id, 10);
        if (isNaN(parsedId)) {
          throw new Error('Invalid product ID');
        }

        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        const foundProduct = cricketProducts.find(p => p.id === parsedId);
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError('Product not found');
          setProduct(null); // Ensure product is null if not found
        }
      } catch (err) {
        setError(err.message);
        setProduct(null); // Ensure product is null on error
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return { product, loading, error };
};