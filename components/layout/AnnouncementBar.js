'use client';
import styles from './AnnouncementBar.module.css';

export default function AnnouncementBar() {
  const message = "✦ FREE DELIVERY ON ORDERS ABOVE RS. 5,000 ✦ NEW SUMMER LAWN COLLECTION LIVE NOW ✦ 100% ORIGINAL BRANDS ✦ CASH ON DELIVERY AVAILABLE ✦";
  
  return (
    <div className={styles.bar}>
      <div className={styles.track}>
        <span className={styles.text}>{message} {message} {message}</span>
        <span className={styles.text}>{message} {message} {message}</span>
      </div>
    </div>
  );
}
