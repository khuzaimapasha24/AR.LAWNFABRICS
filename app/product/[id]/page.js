import Image from 'next/image';
import Link from 'next/link';
import Reviews from '@/components/sections/Reviews';
import styles from './page.module.css';

const allProducts = {
  '1': { title: 'Embroidered Lawn Suit', brand: 'Sana Safinaz', price: 8500, img: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=800&q=80', desc: 'Exquisite embroidery on premium lawn with pure silk dupatta and dyed cambric trousers.', features: ['3 Piece Suit', 'Unstitched', 'Silk Dupatta', 'Embroidered Lawn Shirt'] },
  '2': { title: 'Luxury Chiffon Collection', brand: 'Maria B', price: 15500, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80', desc: 'Luxurious chiffon ensemble featuring hand-embellished motifs with pearl detailing.', features: ['3 Piece Suit', 'Unstitched', 'Chiffon Dupatta', 'Embroidered Front'] },
};
const fallback = { title: 'Premium Designer Suit', brand: 'AR.LAWN Exclusive', price: 9500, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80', desc: 'A beautifully crafted designer suit with premium quality fabric and intricate detailing.', features: ['3 Piece Suit', 'Unstitched', 'Premium Fabric', 'Designer Print'] };

const related = [
  { id: '2', title: 'Luxury Chiffon', brand: 'Maria B', price: 15500, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80' },
  { id: '3', title: 'Cambric Dress', brand: 'Khaadi', price: 4200, img: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?w=400&q=80' },
  { id: '4', title: 'Velvet Edit', brand: 'Gul Ahmed', price: 12000, img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&q=80' },
];

export default async function ProductDetail({ params }) {
  const { id } = await params;
  const product = allProducts[id] || fallback;

  return (
    <div className={styles.page}>
      <div className={styles.breadcrumb}>
        <Link href="/">Home</Link> / <Link href="/collections">Collections</Link> / <span>{product.title}</span>
      </div>
      <div className={styles.container}>
        <div className={styles.gallery}>
          <div className={styles.mainImg}>
            <Image src={product.img} alt={product.title} fill sizes="50vw" className={styles.img} priority />
          </div>
        </div>
        <div className={styles.details}>
          <span className={styles.brand}>{product.brand}</span>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>Rs. {product.price.toLocaleString()}</p>
          <p className={styles.desc}>{product.desc}</p>
          <ul className={styles.features}>
            {product.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <div className={styles.sizeGuide}>
            <h4>Select Size</h4>
            <div className={styles.sizes}>
              {['S', 'M', 'L', 'XL'].map(s => <button key={s} className={styles.sizeBtn}>{s}</button>)}
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.addToCart}>Add to Cart</button>
            <a href="https://wa.me/923022307708" target="_blank" rel="noopener noreferrer" className={styles.waBtn}>Buy via WhatsApp</a>
          </div>
        </div>
      </div>
      <div className={styles.reviewSection}>
        <Reviews />
      </div>
      <div className={styles.relatedSection}>
        <h2 className={styles.relatedTitle}>You May Also Like</h2>
        <div className={styles.relatedGrid}>
          {related.map(r => (
            <Link href={`/product/${r.id}`} key={r.id} className={styles.relCard}>
              <div className={styles.relImg}><Image src={r.img} alt={r.title} fill sizes="250px" className={styles.img} /></div>
              <span className={styles.relBrand}>{r.brand}</span>
              <h3 className={styles.relName}>{r.title}</h3>
              <p className={styles.relPrice}>Rs. {r.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
