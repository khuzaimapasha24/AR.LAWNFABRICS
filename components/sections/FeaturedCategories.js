'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './FeaturedCategories.module.css';

const cats = [
  { name: 'Lawn Collection', href: '/collections', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80', desc: 'Premium unstitched fabric' },
  { name: 'Chiffon & Silk', href: '/collections', img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=1200&q=80', desc: 'Luxury formal wear' },
  { name: 'Ready to Wear', href: '/collections', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&q=80', desc: 'Chic everyday styles' },
  { name: 'Bridal Couture', href: '/collections', img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=1200&q=80', desc: 'Exquisite wedding collections' },
];

export default function FeaturedCategories() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cats.length);
    }, 4000); // changes every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className="sectionLabel">Categories</span>
            <h2 className="sectionTitle">Shop by Category</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.slider}>
            {cats.map((cat, i) => (
              <div 
                key={i} 
                className={`${styles.slide} ${i === active ? styles.activeSlide : ''}`}
                style={{ backgroundImage: `url(${cat.img})` }}
              >
                <div className={styles.overlay}>
                  <div className={styles.content}>
                    <h3 className={styles.catName}>{cat.name}</h3>
                    <p className={styles.catDesc}>{cat.desc}</p>
                    <Link href={cat.href} className={styles.exploreBtn}>
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            
            <div className={styles.indicators}>
              {cats.map((_, i) => (
                <button 
                  key={i} 
                  className={`${styles.dot} ${i === active ? styles.activeDot : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
