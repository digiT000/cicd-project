import styles from '../../css/Global.module.css';
import Product from '../product/Product';

export interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Wireless Headphones', price: 59.99 },
  { id: 2, name: 'Mechanical Keyboard', price: 120.5 },
  { id: 3, name: 'Gaming Mouse', price: 45.0 },
  { id: 4, name: 'USB-C Hub', price: 25.99 },
];

export default function ProductList() {
  return (
    <div className={styles.column}>
      <h2 className={styles.heading}>Products</h2>
      <div className={styles.list}>
        {products.map((product: Product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
