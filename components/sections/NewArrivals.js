'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './NewArrivals.module.css';

export default function NewArrivals() {
  const scrollRef = useRef(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) setItems(data.reverse().slice(0, 6)); // Reverse for new arrivals
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <div>
              <span className="sectionLabel">Just Dropped</span>
              <h2 className="sectionTitle">New Arrivals</h2>
            </div>
            <div className={styles.arrows}>
              <button className={styles.arrow} onClick={() => scroll(-1)}>←</button>
              <button className={styles.arrow} onClick={() => scroll(1)}>→</button>
            </div>
          </div>
        </ScrollReveal>

        <div className={styles.carousel} ref={scrollRef}>
          {loading ? (
             <div style={{padding: '2rem', color: '#888'}}>Loading new arrivals...</div>
          ) : items.map((item, i) => (
            <Link href={`/product/${item.id}`} key={item.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={item.images || item.img} alt={item.title} fill sizes="300px" className={styles.img} />
                <span className={styles.newBadge}>New</span>
              </div>
              <div className={styles.info}>
                <span className={styles.brand}>{item.brand}</span>
                <h3 className={styles.name}>{item.title}</h3>
                <p className={styles.price}>Rs. {item.price.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
