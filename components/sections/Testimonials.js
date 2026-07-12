'use client';
import { useState, useEffect } from 'react';
import ScrollReveal from '../ui/ScrollReveal';
import StarRating from '../ui/StarRating';
import styles from './Testimonials.module.css';

const reviews = [
  { name: 'Ayesha K.', location: 'Lahore', rating: 5, text: 'Absolutely love the fabric quality! The embroidery is even more beautiful in person. Fast delivery too!' },
  { name: 'Sara M.', location: 'Karachi', rating: 5, text: 'Best online shopping experience. The packaging was premium and the suit was exactly as shown. Highly recommend!' },
  { name: 'Fatima R.', location: 'Islamabad', rating: 4, text: 'Beautiful collection and genuine brands. The customer service was very helpful. Will definitely order again.' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className="sectionLabel">Testimonials</span>
            <h2 className="sectionTitle">What Our Customers Say</h2>
          </div>
        </ScrollReveal>

        <div className={styles.carousel}>
          {reviews.map((r, i) => (
            <div key={i} className={`${styles.card} ${i === active ? styles.active : ''}`}>
              <StarRating rating={r.rating} size={18} />
              <p className={styles.text}>"{r.text}"</p>
              <div className={styles.author}>
                <span className={styles.avatar}>{r.name[0]}</span>
                <div>
                  <span className={styles.name}>{r.name}</span>
                  <span className={styles.loc}>{r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {reviews.map((_, i) => (
            <button key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
