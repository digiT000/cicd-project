import type { User } from '../App';

export default function UserProfile(user: User) {
  return (
    <section className="user-profile">
      <img
        src={user.imageUrl ?? 'https://via.placeholder.com/150'}
        alt={user.name}
        className="user-image"
      />
      <h2 className="user-name">{user.name}</h2>
      <p className="user-email">{user.email}</p>
    </section>
  );
}
