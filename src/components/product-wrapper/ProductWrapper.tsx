import { memo, useCallback } from 'react';
import styles from '../../css/Global.module.css';
import ProductList from '../product-list/ProductList';

export interface ProductInterface {
  id: number;
  name: string;
  price: number;
}

const products: ProductInterface[] = [
  { id: 1, name: 'Wireless Headphones', price: 59.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 120.5 },
  { id: 3, name: 'Gaming Mouse', price: 45.0 },
  { id: 4, name: 'USB-C Hub', price: 25.99 },
];

const ProductWrapper = memo(
  ({ setCart }: { setCart: (product: ProductInterface) => void }) => {
    const handleAddToCart = useCallback(
      (product: ProductInterface) => {
        setCart(product);
      },
      [setCart]
    );

    return (
      <div data-testid="product-wrapper-container" className={styles.column}>
        <h2 className={styles.heading}>Products</h2>
        <ProductList products={products} handleAddToCart={handleAddToCart} />
      </div>
    );
  }
);

ProductWrapper.displayName = 'ProductWrapper';

export default ProductWrapper;
