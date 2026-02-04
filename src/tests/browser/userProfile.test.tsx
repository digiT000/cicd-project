import { test } from 'vitest';
import UserProfile from '../../components/user-profile/UserProfile';
import { render } from 'vitest-browser-react';
import '../../App.css';
import '../../index.css';

test('User Profile Component', async () => {
  const screen = await render(
    <UserProfile
      email="fareldeksano000@gmail.com"
      id={1}
      imageUrl={'https://placehold.co/100x100'}
      name="Farel"
    />
  );
  await screen.getByText('Farel');
});
