'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

export default function NewArrivalsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) setItems(data.reverse().slice(0, 12)); // Latest 12 items
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);


  return (
    <div className={styles.page}>
      <div className={styles.hero}><h1 className={styles.heroTitle}>New Arrivals</h1><p className={styles.heroSub}>The latest drops from your favourite designers.</p></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {loading ? (
             <div style={{padding: '2rem', color: '#888'}}>Loading new arrivals...</div>
          ) : items.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80}>
              <Link href={`/product/${p.id}`} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image src={p.images || p.img || 'https://images.unsplash.com/photo-1595777457583-95e059d581b8'} alt={p.title} fill sizes="(max-width:768px) 50vw, 33vw" className={styles.img} />
                  <span className={styles.badge}>New</span>
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
  );
}
