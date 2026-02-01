import { useState } from 'react';
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
  imageUrl: null,
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserProfile {...MOCK_DATA_USER} />
      <h1>CI Practice</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
