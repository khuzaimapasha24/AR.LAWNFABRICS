'use client';
import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

function CollectionsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBrand, setActiveBrand] = useState('All');
  const [activePrice, setActivePrice] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  
  const [dbProducts, setDbProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) setDbProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...dbProducts];

    if (query) {
      const q = query.toLowerCase();
      result = result.filter(p => p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q));
    }

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activeBrand !== 'All') {
      result = result.filter(p => p.brand === activeBrand);
    }

    if (activePrice !== 'All') {
      if (activePrice === 'Under Rs. 5,000') result = result.filter(p => p.price < 5000);
      else if (activePrice === 'Rs. 5,000 - 15,000') result = result.filter(p => p.price >= 5000 && p.price <= 15000);
      else if (activePrice === 'Above Rs. 15,000') result = result.filter(p => p.price > 15000);
    }

    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [activeCategory, activeBrand, activePrice, sortBy]);
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
            <button 
              key={c} 
              className={`${styles.filterBtn} ${activeCategory === c ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(c)}
            >
              {c}
            </button>
          ))}
          
          <h3 className={styles.filterTitle} style={{marginTop: '2rem'}}>Brands</h3>
          {['All', 'Sana Safinaz', 'Maria B', 'Khaadi', 'Gul Ahmed', 'Elan', 'Sapphire', 'Alkaram', 'Nishat Linen'].map(b => (
            <button 
              key={b} 
              className={`${styles.filterBtn} ${activeBrand === b ? styles.activeFilter : ''}`}
              onClick={() => setActiveBrand(b)}
            >
              {b}
            </button>
          ))}
          
          <h3 className={styles.filterTitle} style={{marginTop: '2rem'}}>Price Range</h3>
          {['All', 'Under Rs. 5,000', 'Rs. 5,000 - 15,000', 'Above Rs. 15,000'].map(p => (
            <button 
              key={p} 
              className={`${styles.filterBtn} ${activePrice === p ? styles.activeFilter : ''}`}
              onClick={() => setActivePrice(p)}
            >
              {p}
            </button>
          ))}
        </div>
        <div className={styles.productsArea}>
          {query && (
            <div className={styles.searchResultHeader}>
              Showing results for: <strong>"{query}"</strong>
            </div>
          )}
          <div className={styles.topBar}>
            <span className={styles.count}>{filteredProducts.length} Products</span>
            <select className={styles.sort} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="Featured">Sort by: Featured</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>
          </div>
          <div className={styles.grid}>
            {loading ? (
              <div className={styles.loading}>Loading exclusive products...</div>
            ) : filteredProducts.length > 0 ? filteredProducts.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 80}>
                <Link href={`/product/${p.id}`} className={styles.card}>
                  <div className={styles.imgWrap}>
                    <Image src={p.images || p.img} alt={p.title} fill sizes="(max-width:768px) 50vw, 25vw" className={styles.img} />
                    <div className={styles.quickView}>Quick View</div>
                  </div>
                  <div className={styles.info}>
                    <span className={styles.brand}>{p.brand}</span>
                    <h3 className={styles.name}>{p.title}</h3>
                    <p className={styles.price}>Rs. {p.price.toLocaleString()}</p>
                  </div>
                </Link>
              </ScrollReveal>
            )) : (
              <div className={styles.noResults}>
                <h3>No products found</h3>
                <p>Try adjusting your filters to see more results.</p>
                <button onClick={() => { setActiveCategory('All'); setActiveBrand('All'); setActivePrice('All'); }} className={styles.clearBtn}>Clear All Filters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className={styles.loading}>Loading Collections...</div>}>
      <CollectionsContent />
    </Suspense>
  );
}
