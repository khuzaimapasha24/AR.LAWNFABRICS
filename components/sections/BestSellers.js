'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './BestSellers.module.css';

export default function BestSellers() {
  const scrollRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) setProducts(data.slice(0, 6)); // First 6 for best sellers
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; 
      const currentScroll = scrollRef.current.scrollLeft;
      const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

      if (direction === 'right' && currentScroll >= maxScroll - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' }); // loop back
      } else {
        scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div className={styles.headerText}>
              <span className="sectionLabel">Most Loved</span>
              <h2 className="sectionTitle">Best Sellers</h2>
              <p className="sectionSubtitle">The pieces our customers can't stop wearing.</p>
            </div>
            <div className={styles.navButtons}>
              <button className={styles.navBtn} onClick={() => scroll('left')} aria-label="Previous">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
              <button className={styles.navBtn} onClick={() => scroll('right')} aria-label="Next">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.sliderContainer}>
          <div className={styles.sliderTrack} ref={scrollRef}>
          {loading ? (
            <div style={{padding: '2rem', color: '#888'}}>Loading best sellers...</div>
          ) : products.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 120}>
              <Link href={`/product/${p.id}`} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image src={p.images || p.img} alt={p.title} fill sizes="(max-width:768px) 50vw, 25vw" className={styles.img} />
                  <button className={styles.wishBtn} aria-label="Add to wishlist">♡</button>
                  <div className={styles.quickView}>Quick View</div>
                </div>
                <div className={styles.info}>
                  <span className={styles.brand}>{p.brand}</span>
                  <h3 className={styles.name}>{p.title}</h3>
                  <p className={styles.price}>Rs. {p.price.toLocaleString()}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
