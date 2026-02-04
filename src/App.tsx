import './App.css';
import UserProfile from './components/UserProfile';

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
    <>
      <UserProfile {...MOCK_DATA_USER} />
    </>
  );
}

export default App;
