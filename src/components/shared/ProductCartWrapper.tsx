import Cart from '../cart/Cart';
import ProductWrapper, {
  type ProductInterface,
} from '../product-wrapper/ProductWrapper';
import styles from '../../css/Global.module.css';
import { useCallback, useState } from 'react';

export default function ProductCartWrapper() {
  const [cart, setCart] = useState<ProductInterface[]>([]);

  const setCartItems = useCallback((product: ProductInterface) => {
    setCart((prev) => [...prev, product]);
  }, []);

  const removeItemFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return (
    <section className={styles.container}>
      <ProductWrapper setCart={setCartItems} />
      <Cart carts={cart} removeItemFromCart={removeItemFromCart} />
    </section>
  );
}
