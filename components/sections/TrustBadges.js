'use client';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './TrustBadges.module.css';

const badges = [
  { icon: '🚚', title: 'Free Shipping', desc: 'On orders above Rs. 5,000' },
  { icon: '🔄', title: 'Easy Returns', desc: '7-day hassle-free returns' },
  { icon: '💵', title: 'Cash on Delivery', desc: 'Pay when you receive' },
  { icon: '✔️', title: '100% Original', desc: 'Guaranteed authentic brands' },
];

export default function TrustBadges() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {badges.map((b, i) => (
          <ScrollReveal key={i} delay={i * 100}>
            <div className={styles.badge}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{b.icon}</span>
              </div>
              <h4 className={styles.title}>{b.title}</h4>
              <p className={styles.desc}>{b.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
