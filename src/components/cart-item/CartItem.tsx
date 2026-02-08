import styles from './CartItem.module.css';
import buttonStyles from '../../css/Button.module.css';
import type { ProductInterface } from '../product-wrapper/ProductWrapper';

interface CartItemProps {
  item: ProductInterface;
  handlerRemoveFromCart: (id: number) => void;
}

export default function CartItem({
  item,
  handlerRemoveFromCart,
}: CartItemProps) {
  return (
    <div className={styles.item}>
      <span>{item.name}</span>
      <div className={styles.actions}>
        <strong>${item.price.toFixed(2)}</strong>
        <button
          data-testid={`remove-from-cart-button-${item.id}`}
          className={`${buttonStyles.btn} ${buttonStyles.btnRemove}`}
          onClick={() => handlerRemoveFromCart(item.id)}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
