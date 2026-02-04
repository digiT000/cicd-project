import styles from './CartItem.module.css';
import buttonStyles from '../../css/Button.module.css';
import type { Product } from '../product-list/ProductList';

export default function CartItem(item: Product) {
  return (
    <div className={styles.item}>
      <span>{item.name}</span>
      <div className={styles.actions}>
        <strong>${item.price.toFixed(2)}</strong>
        <button
          className={`${buttonStyles.btn} ${buttonStyles.btnRemove}`}
          //   onClick={() => removeFromCart(index)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
