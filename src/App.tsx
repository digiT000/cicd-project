import './App.css';
import ProductCartWrapper from './components/shared/ProductCartWrapper';
import UserProfile from './components/user-profile/UserProfile';

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
      <ProductCartWrapper />
    </section>
  );
}

export default App;
