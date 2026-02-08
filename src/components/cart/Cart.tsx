import globalStyles from '../../css/Global.module.css';
import styles from './Cart.module.css';
import type { ProductInterface } from '../product-wrapper/ProductWrapper';
import CartItem from '../cart-item/CartItem';

export default function Cart({
  carts,
  removeItemFromCart,
}: {
  carts: ProductInterface[];
  removeItemFromCart: (id: number) => void;
}) {
  const total = carts.reduce((sum, item) => sum + item.price, 0);

  function removeItem(id: number) {
    removeItemFromCart(id);
  }

  return (
    <div data-testid="cart-wrapper-container" className={globalStyles.column}>
      <h2 className={globalStyles.heading}>Your Cart ({carts.length})</h2>
      <div className={styles.list}>
        {carts.length === 0 ? (
          <p className={styles.emptyMsg}>Cart is empty</p>
        ) : (
          <>
            {carts.map((item: ProductInterface) => (
              <CartItem item={item} handlerRemoveFromCart={removeItem} />
            ))}
            <div className={styles.total}>Total: ${total.toFixed(2)}</div>
          </>
        )}
      </div>
    </div>
  );
}
