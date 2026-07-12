'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './NewArrivals.module.css';

const items = [
  { id: '10', title: 'Pastel Dream Lawn', brand: 'Maria B', price: 9800, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { id: '11', title: 'Midnight Chiffon', brand: 'Elan', price: 16500, img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&q=80' },
  { id: '12', title: 'Ivory Embroidered', brand: 'Sana Safinaz', price: 11200, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80' },
  { id: '13', title: 'Cotton Luxe Pret', brand: 'Sapphire', price: 4500, img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80' },
  { id: '14', title: 'Velvet Noir Edit', brand: 'Gul Ahmed', price: 19500, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { id: '15', title: 'Festive Silk Dupatta', brand: 'Khaadi', price: 7200, img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&q=80' },
];

export default function NewArrivals() {
  const scrollRef = useRef(null);

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
          {items.map((item, i) => (
            <Link href={`/product/${item.id}`} key={item.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image src={item.img} alt={item.title} fill sizes="300px" className={styles.img} />
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
