import Link from 'next/link';
import styles from './page.module.css';

export const metadata = { title: 'Wishlist | AR.LAWN' };

export default function WishlistPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}><h1 className={styles.heroTitle}>Your Wishlist</h1></div>
      <div className={styles.container}>
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>♡</span>
          <h2 className={styles.emptyTitle}>Your wishlist is empty</h2>
          <p className={styles.emptyText}>Browse our collections and save your favorite pieces here.</p>
          <Link href="/collections" className={styles.shopBtn}>Browse Collections</Link>
        </div>
      </div>
    </div>
  );
}
