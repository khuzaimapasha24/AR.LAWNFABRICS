import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ id, title, brand, price, image }) {
  return (
    <Link href={`/product/${id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <span className={styles.viewDetails}>View Details</span>
        </div>
      </div>
      <div className={styles.info}>
        <span className={styles.brand}>{brand}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.price}>Rs. {price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
