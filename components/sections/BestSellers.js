import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../ui/ScrollReveal';
import styles from './BestSellers.module.css';

const products = [
  { id: '1', title: 'Embroidered Lawn Suit', brand: 'Sana Safinaz', price: 8500, img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80' },
  { id: '2', title: 'Luxury Chiffon Collection', brand: 'Maria B', price: 15500, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { id: '3', title: 'Printed Cambric Dress', brand: 'Khaadi', price: 4200, img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&q=80' },
  { id: '4', title: 'Festive Velvet Edit', brand: 'Gul Ahmed', price: 12000, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80' },
];

export default function BestSellers() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <div className={styles.header}>
            <span className="sectionLabel">Most Loved</span>
            <h2 className="sectionTitle">Best Sellers</h2>
            <p className="sectionSubtitle">The pieces our customers can't stop wearing.</p>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
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
    </section>
  );
}
