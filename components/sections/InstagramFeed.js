import ScrollReveal from '../ui/ScrollReveal';
import styles from './InstagramFeed.module.css';

const images = [
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80',
  'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&q=80',
  'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=400&q=80',
  'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80',
  'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80',
  'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&q=80',
];

export default function InstagramFeed() {
  const doubled = [...images, ...images, ...images]; // Tripled for smooth infinite scroll on wide screens
  return (
    <section className={styles.section}>
      <ScrollReveal>
        <div className={styles.header}>
          <span className="sectionLabel">Follow Us</span>
          <h2 className="sectionTitle">@AR.LAWN</h2>
        </div>
      </ScrollReveal>
      
      <div className={styles.sliderContainer}>
        <div className={styles.track}>
          {doubled.map((img, i) => (
            <a href="#" key={i} className={styles.item} target="_blank" rel="noopener noreferrer">
              <div className={styles.imgWrap} style={{ backgroundImage: `url(${img})` }} />
              <div className={styles.overlay}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/></svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
