'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    setAdding(true);
    addToCart(product);
    setTimeout(() => {
      setAdding(false);
    }, 500); // UI feedback
  };

  if (loading) return <div className={styles.loading}>Loading exclusive details...</div>;
  if (!product || product.error) return <div className={styles.error}>Product not found.</div>;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <div className={styles.mainImageWrap}>
            <Image 
              src={product.images || 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'} 
              alt={product.title} 
              fill 
              className={styles.mainImage} 
            />
          </div>
        </div>
        
        <div className={styles.infoSection}>
          <span className={styles.brand}>{product.brand}</span>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.price}>Rs. {product.price.toLocaleString()}</p>
          
          <div className={styles.details}>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Availability:</strong> {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
          </div>
          
          <div className={styles.description}>
            <h3>Description</h3>
            <p>Experience the ultimate luxury with this exquisite piece from {product.brand}. Crafted with precision and designed to perfection, it reflects true elegance in every thread. This premium {product.category.toLowerCase()} is perfect for making a bold fashion statement.</p>
          </div>

          <button 
            className={`${styles.addToCart} ${adding ? styles.adding : ''}`}
            onClick={handleAddToCart}
            disabled={product.stock === 0 || adding}
          >
            {adding ? 'Added!' : 'Add to Cart'}
          </button>
          
          <div className={styles.shippingInfo}>
            <p>✓ Free delivery nationwide</p>
            <p>✓ 100% Original & Authentic</p>
            <p>✓ 7 Days Exchange Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
