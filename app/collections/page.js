import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

const products = [
  { id: '1', title: 'Embroidered Lawn Suit', brand: 'Sana Safinaz', price: 8500, img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80', category: 'Lawn' },
  { id: '2', title: 'Luxury Chiffon Collection', brand: 'Maria B', price: 15500, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', category: 'Chiffon' },
  { id: '3', title: 'Printed Cambric Dress', brand: 'Khaadi', price: 4200, img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&q=80', category: 'Pret' },
  { id: '4', title: 'Festive Velvet Edit', brand: 'Gul Ahmed', price: 12000, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80', category: 'Bridal' },
  { id: '5', title: 'Bridal Couture Set', brand: 'Elan', price: 45000, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', category: 'Bridal' },
  { id: '6', title: 'Casual Pret Kurta', brand: 'Sapphire', price: 3500, img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80', category: 'Pret' },
  { id: '7', title: 'Digital Print Lawn', brand: 'Alkaram', price: 5800, img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&q=80', category: 'Lawn' },
  { id: '8', title: 'Silk Dupatta Set', brand: 'Nishat Linen', price: 7200, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80', category: 'Chiffon' },
];

export const metadata = { title: 'Collections | AR.LAWN' };

export default function CollectionsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>All Collections</h1>
        <p className={styles.heroSub}>Explore the finest luxury fabrics curated for every occasion.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <h3 className={styles.filterTitle}>Categories</h3>
          {['All', 'Lawn', 'Chiffon', 'Bridal', 'Pret'].map(c => (
            <button key={c} className={styles.filterBtn}>{c}</button>
          ))}
          <h3 className={styles.filterTitle} style={{marginTop: '2rem'}}>Brands</h3>
          {['Sana Safinaz', 'Maria B', 'Khaadi', 'Gul Ahmed', 'Elan', 'Sapphire'].map(b => (
            <button key={b} className={styles.filterBtn}>{b}</button>
          ))}
          <h3 className={styles.filterTitle} style={{marginTop: '2rem'}}>Price Range</h3>
          <button className={styles.filterBtn}>Under Rs. 5,000</button>
          <button className={styles.filterBtn}>Rs. 5,000 - 15,000</button>
          <button className={styles.filterBtn}>Above Rs. 15,000</button>
        </div>
        <div className={styles.productsArea}>
          <div className={styles.topBar}>
            <span className={styles.count}>{products.length} Products</span>
            <select className={styles.sort}>
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
          <div className={styles.grid}>
            {products.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 80}>
                <Link href={`/product/${p.id}`} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <Image src={p.img} alt={p.title} fill sizes="(max-width:768px) 50vw, 25vw" className={styles.img} />
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
    </div>
  );
}
