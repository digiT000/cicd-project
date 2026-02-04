import globalStyles from '../../css/Global.module.css';
import styles from './Cart.module.css';
import type { Product } from '../product-list/ProductList';
import CartItem from '../cart-item/CartItem';
import { useState } from 'react';

export default function Cart() {
  const [cart] = useState<Product[]>([]);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={globalStyles.column}>
      <h2 className={globalStyles.heading}>Your Cart ({cart.length})</h2>
      <div className={styles.list}>
        {cart.length === 0 ? (
          <p className={styles.emptyMsg}>Cart is empty</p>
        ) : (
          <>
            {cart.map((item: Product) => (
              <CartItem {...item} />
            ))}
            <div className={styles.total}>Total: ${total.toFixed(2)}</div>
          </>
        )}
      </div>
    </div>
  );
}
