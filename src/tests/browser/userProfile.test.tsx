import { test } from 'vitest';
import UserProfile from '../../components/UserProfile';
import { render } from 'vitest-browser-react';

test('User Profile Component', async () => {
  const screen = await render(
    <UserProfile
      email="fareldeksano000@gmail.com"
      id={1}
      imageUrl={null}
      name="Farel"
    />
  );
  await screen.getByText('Farel');
});
