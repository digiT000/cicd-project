import styles from '../../css/Global.module.css';
import { type ProductInterface } from '../product-wrapper/ProductWrapper';
import Product from '../product/Product';

interface ProductListProps {
  products: ProductInterface[];
  handleAddToCart: (product: ProductInterface) => void;
}

export default function ProductList({
  handleAddToCart,
  products,
}: ProductListProps) {
  if (products.length === 0) {
    return <p className={styles.emptyMsg}>No products available</p>;
  }

  return (
    <div className={styles.list}>
      {products.map((product: ProductInterface) => {
        return (
          <Product
            key={product.id}
            inCart={false}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        );
      })}
    </div>
  );
}
