import type { ProductInterface } from '../product-wrapper/ProductWrapper';
import styles from './Product.module.css';
import buttonStyles from '../../css/Button.module.css';

interface ProductProps {
  product: ProductInterface;
  inCart: boolean;
  handleAddToCart: (product: ProductInterface) => void;
}

export default function Product({
  inCart,
  product,
  handleAddToCart,
}: ProductProps) {
  function addToCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    handleAddToCart(product);
  }

  return (
    <article className={styles.item}>
      <div className={styles.itemDetails}>
        <strong className={styles.itemName}>{product.name}</strong>

        <span className={styles.itemPrice}>${product.price.toFixed(2)}</span>
      </div>
      {/* CSS Modules supports multiple classes via template literals */}
      <button
        data-testid={`add-to-cart-button-${product.id}`}
        className={`${buttonStyles.btn} ${buttonStyles.btnAdd}`}
        onClick={addToCart}
      >
        {inCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </article>
  );
}
