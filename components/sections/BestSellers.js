'use client';
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './BestSellers.module.css';

const products = [
  { id: '1', title: 'Embroidered Lawn Suit', brand: 'Sana Safinaz', price: 8500, img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80' },
  { id: '2', title: 'Luxury Chiffon Collection', brand: 'Maria B', price: 15500, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { id: '3', title: 'Printed Cambric Dress', brand: 'Khaadi', price: 4200, img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&q=80' },
  { id: '4', title: 'Festive Velvet Edit', brand: 'Gul Ahmed', price: 12000, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80' },
  { id: '5', title: 'Bridal Couture Set', brand: 'Elan', price: 45000, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { id: '6', title: 'Casual Pret Kurta', brand: 'Sapphire', price: 3500, img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80' },
];

export default function BestSellers() {
  const scrollRef = useRef(null);

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
          {products.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 120}>
              <Link href={`/product/${p.id}`} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image src={p.img} alt={p.title} fill sizes="(max-width:768px) 50vw, 25vw" className={styles.img} />
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
