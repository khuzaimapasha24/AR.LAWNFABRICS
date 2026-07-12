'use client';
import { useState, useEffect } from 'react';
import ProductCard from '../ui/ProductCard';
import styles from './FeaturedProducts.module.css';

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) setProducts(data.slice(0, 4)); // Get 4 for featured
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Featured Collections</h2>
          <p className={styles.subtitle}>Handpicked luxury wear for the modern woman</p>
        </div>
        
        <div className={styles.grid}>
          {loading ? (
             <div style={{padding: '2rem', color: '#888'}}>Loading featured products...</div>
          ) : products.map(product => (
            <ProductCard key={product.id} id={product.id} title={product.title} brand={product.brand} price={product.price} image={product.images || product.image || 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77'} />
          ))}
        </div>
      </div>
    </section>
  );
}
