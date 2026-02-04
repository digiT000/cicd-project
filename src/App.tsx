import './App.css';
import Cart from './components/cart/Cart';
import ProductList from './components/product-list/ProductList';
import UserProfile from './components/user-profile/UserProfile';
import styles from './css/Global.module.css';

export interface User {
  id: number;
  name: string;
  email: string;
  imageUrl: string | null;
}

const MOCK_DATA_USER: User = {
  id: 1,
  name: 'John Doe',
  email: 'fareldeksano000@gmail.com',
  imageUrl: 'https://placehold.co/100x100',
};

function App() {
  return (
    <section className="app-container">
      <UserProfile {...MOCK_DATA_USER} />
      <section className={styles.container}>
        <ProductList />
        <Cart />
      </section>
    </section>
  );
}

export default App;
