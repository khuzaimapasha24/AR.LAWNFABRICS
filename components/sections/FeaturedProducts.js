import ProductCard from '../ui/ProductCard';
import styles from './FeaturedProducts.module.css';

// Placeholder mock data
const products = [
  {
    id: '1',
    title: 'Embroidered Lawn Suit',
    brand: 'Sana Safinaz',
    price: 8500,
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Luxury Chiffon Collection',
    brand: 'Maria B',
    price: 15500,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    title: 'Printed Cambric Dress',
    brand: 'Khaadi',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1583391733958-620ed75f1828?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    title: 'Festive Velvet Edit',
    brand: 'Gul Ahmed',
    price: 12000,
    image: 'https://images.unsplash.com/photo-1589465885857-44edb59bbff2?auto=format&fit=crop&q=80&w=800'
  }
];

export default function FeaturedProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Collections</h2>
          <p className={styles.subtitle}>Handpicked luxury wear for the modern woman</p>
        </div>
        
        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
