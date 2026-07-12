import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

const brands = [
  { name: 'Sana Safinaz', desc: 'Timeless elegance & luxury', initials: 'SS', products: 45 },
  { name: 'Maria B', desc: 'Trendsetting Pakistani fashion', initials: 'MB', products: 38 },
  { name: 'Gul Ahmed', desc: 'Heritage meets modernity', initials: 'GA', products: 52 },
  { name: 'Khaadi', desc: 'Vibrant prints & textures', initials: 'KH', products: 41 },
  { name: 'Elan', desc: 'Premium bridal couture', initials: 'EL', products: 28 },
  { name: 'Sapphire', desc: 'Chic contemporary wear', initials: 'SP', products: 35 },
  { name: 'Alkaram', desc: 'Quality fabric traditions', initials: 'AK', products: 47 },
  { name: 'Nishat Linen', desc: 'Modern linen collections', initials: 'NL', products: 33 },
];

export const metadata = { title: 'Our Brands | AR.LAWN' };

export default function BrandsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Designer Brands</h1>
        <p className={styles.heroSub}>Partnering with the finest fashion houses of Pakistan.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {brands.map((b, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <Link href="/collections" className={styles.card}>
                <div className={styles.initials}>{b.initials}</div>
                <h3 className={styles.brandName}>{b.name}</h3>
                <p className={styles.desc}>{b.desc}</p>
                <span className={styles.count}>{b.products} Products</span>
                <span className={styles.explore}>View Collection →</span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
