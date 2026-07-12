import styles from './StarRating.module.css';

export default function StarRating({ rating = 0, size = 16 }) {
  return (
    <div className={styles.stars} style={{ fontSize: size }}>
      {Array(5).fill(0).map((_, i) => (
        <span key={i} className={i < rating ? styles.filled : styles.empty}>★</span>
      ))}
    </div>
  );
}
