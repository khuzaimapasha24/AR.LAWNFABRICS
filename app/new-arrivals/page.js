import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

const items = [
  { id: '10', title: 'Pastel Dream Lawn', brand: 'Maria B', price: 9800, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', isNew: true },
  { id: '11', title: 'Midnight Chiffon', brand: 'Elan', price: 16500, img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&q=80', isNew: true },
  { id: '12', title: 'Ivory Embroidered', brand: 'Sana Safinaz', price: 11200, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80', isNew: true },
  { id: '13', title: 'Cotton Luxe Pret', brand: 'Sapphire', price: 4500, img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=600&q=80', isNew: true },
  { id: '14', title: 'Velvet Noir Edit', brand: 'Gul Ahmed', price: 19500, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', isNew: true },
  { id: '15', title: 'Festive Silk Dupatta', brand: 'Khaadi', price: 7200, img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=600&q=80', isNew: true },
];

export const metadata = { title: 'New Arrivals | AR.LAWN' };

export default function NewArrivalsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}><h1 className={styles.heroTitle}>New Arrivals</h1><p className={styles.heroSub}>The latest drops from your favourite designers.</p></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {items.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 80}>
              <Link href={`/product/${p.id}`} className={styles.card}>
                <div className={styles.imgWrap}>
                  <Image src={p.img} alt={p.title} fill sizes="(max-width:768px) 50vw, 33vw" className={styles.img} />
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
