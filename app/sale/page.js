'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

export default function SalePage() {
  const [saleItems, setSaleItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          // Add dummy oldPrice for sale effect if none exists
          const withSale = data.slice(0, 8).map(p => ({
            ...p,
            oldPrice: p.salePrice || Math.round(p.price * 1.4)
          }));
          setSaleItems(withSale);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.saleBadge}>Limited Time</span>
        <h1 className={styles.heroTitle}>Season End Sale</h1>
        <p className={styles.heroSub}>Up to 50% off on selected premium collections.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {loading ? (
             <div style={{padding: '2rem', color: '#888'}}>Loading sale items...</div>
          ) : saleItems.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80}>
              <Link href={`/product/${p.id}`} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image src={p.images || p.img || 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77'} alt={p.title} fill sizes="(max-width:768px) 50vw, 25vw" className={styles.img} />
                  <span className={styles.discount}>{Math.round((1 - p.price / p.oldPrice) * 100)}% OFF</span>
                </div>
                <div className={styles.info}>
                  <span className={styles.brand}>{p.brand}</span>
                  <h3 className={styles.name}>{p.title}</h3>
                  <div className={styles.priceRow}>
                    <span className={styles.newPrice}>Rs. {p.price.toLocaleString()}</span>
                    <span className={styles.oldPrice}>Rs. {p.oldPrice.toLocaleString()}</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
