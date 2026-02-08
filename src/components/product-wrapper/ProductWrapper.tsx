import { useCallback } from 'react';
import styles from '../../css/Global.module.css';
import ProductList from '../product-list/ProductList';
import useSWR from 'swr';
import { fetchProducts } from '../../utils/fetchProduct';

export interface ProductInterface {
  id: number;
  name: string;
  price: number;
}

const ProductWrapper = ({
  setCart,
}: {
  setCart: (product: ProductInterface) => void;
}) => {
  const { data, error, isLoading } = useSWR('/api/products', fetchProducts);

  const handleAddToCart = useCallback(
    (product: ProductInterface) => {
      setCart(product);
    },
    [setCart]
  );

  if (isLoading) {
    return (
      <div data-testid="product-wrapper-container" className={styles.column}>
        <h2 className={styles.heading}>Products</h2>
        <p data-testid="loading-products">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div data-testid="product-wrapper-container" className={styles.column}>
        <h2 className={styles.heading}>Products</h2>
        <p>Error loading products</p>
      </div>
    );
  }

  return (
    <div data-testid="product-wrapper-container" className={styles.column}>
      <h2 className={styles.heading}>Products</h2>

      <ProductList products={data ?? []} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductWrapper;
