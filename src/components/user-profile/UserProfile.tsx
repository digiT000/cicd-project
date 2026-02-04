import type { User } from '../../App';
import styles from './UserProfile.module.css';

export default function UserProfile(user: User) {
  return (
    <section className={styles.userProfiles}>
      <img
        src={user.imageUrl ?? 'https://via.placeholder.com/150'}
        alt={user.name}
        className={styles.image}
      />
      <div className={styles.wrapper}>
        <h2 className={`${styles.text} ${styles.bold}`}>{user.email}</h2>
        <p className={styles.text}>{user.name}</p>
      </div>
    </section>
  );
}
