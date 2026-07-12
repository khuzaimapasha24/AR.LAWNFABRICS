import Link from 'next/link';
import styles from './page.module.css';

export const metadata = { title: 'Cart | AR.LAWN' };

export default function CartPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}><h1 className={styles.heroTitle}>Shopping Cart</h1></div>
      <div className={styles.container}>
        <div className={styles.empty}>
          <span className={styles.emptyIcon}>🛍️</span>
          <h2 className={styles.emptyTitle}>Your cart is empty</h2>
          <p className={styles.emptyText}>Looks like you haven't added anything to your cart yet.</p>
          <Link href="/collections" className={styles.shopBtn}>Start Shopping</Link>
        </div>
      </div>
    </div>
  );
}
