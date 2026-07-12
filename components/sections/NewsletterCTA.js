'use client';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './NewsletterCTA.module.css';

export default function NewsletterCTA() {
  return (
    <section className={styles.section}>
      <ScrollReveal>
        <div className={styles.container}>
          <span className={styles.label}>Stay Connected</span>
          <h2 className={styles.title}>Get 10% Off Your First Order</h2>
          <p className={styles.subtitle}>Subscribe to our newsletter for exclusive offers, new arrivals, and style inspiration.</p>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" className={styles.input} required />
            <button type="submit" className={styles.btn}>Subscribe</button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}
