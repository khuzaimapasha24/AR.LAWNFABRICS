import ScrollReveal from '../ui/ScrollReveal';
import styles from './Lookbook.module.css';

export default function Lookbook() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <ScrollReveal className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <div className={styles.parallaxImg} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=1000&q=80)` }} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} className={styles.textCol}>
            <span className="sectionLabel">Lookbook</span>
            <h2 className={styles.title}>The Art of Dressing</h2>
            <p className={styles.text}>
              Every fabric tells a story. Our curated lookbook showcases the perfect harmony between traditional craftsmanship and modern silhouettes. From intricate embroidery to bold prints, discover pieces that define your personal style.
            </p>
            <a href="/collections" className={styles.link}>View Lookbook →</a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
