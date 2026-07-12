'use client';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

const saleItems = [
  { id: '20', title: 'Summer Lawn Clearance', brand: 'Gul Ahmed', price: 3200, oldPrice: 6500, img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80' },
  { id: '21', title: 'Printed Chiffon Set', brand: 'Maria B', price: 8900, oldPrice: 15500, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { id: '22', title: 'Cotton Pret Kurta', brand: 'Sapphire', price: 1800, oldPrice: 3500, img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&q=80' },
  { id: '23', title: 'Embroidered Suit', brand: 'Khaadi', price: 4500, oldPrice: 8500, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80' },
];

export default function SalePage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <span className={styles.saleBadge}>Limited Time</span>
        <h1 className={styles.heroTitle}>Season End Sale</h1>
        <p className={styles.heroSub}>Up to 50% off on selected premium collections.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {saleItems.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80}>
              <Link href={`/product/${p.id}`} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image src={p.img} alt={p.title} fill sizes="(max-width:768px) 50vw, 25vw" className={styles.img} />
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
