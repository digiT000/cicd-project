import type { Product } from '../product-list/ProductList';
import styles from './Product.module.css';
import buttonStyles from '../../css/Button.module.css';

export default function Product(product: Product) {
  return (
    <article key={product.id} className={styles.item}>
      <div className={styles.itemDetails}>
        <strong className={styles.itemName}>{product.name}</strong>

        <span className={styles.itemPrice}>${product.price.toFixed(2)}</span>
      </div>
      {/* CSS Modules supports multiple classes via template literals */}
      <button
        className={`${buttonStyles.btn} ${buttonStyles.btnAdd}`}
        // onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </article>
  );
}
