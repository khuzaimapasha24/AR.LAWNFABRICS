'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './HeroScene.module.css';

const images = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=80',
  'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=1600&q=80',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80'
];

export default function HeroScene() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Image Slider */}
      {images.map((img, index) => (
        <div 
          key={index} 
          className={`${styles.imageWrap} ${index === currentIndex ? styles.active : ''}`}
        >
          <Image 
            src={img} 
            alt="Hero Background" 
            fill 
            priority={index === 0}
            className={styles.image} 
          />
          <div className={styles.overlay}></div>
        </div>
      ))}

      <div className={styles.content}>
        <span className={styles.label}>Summer Collection 2024</span>
        <h1 className={styles.title}>Elegance in<br/>Every Thread</h1>
        <p className={styles.subtitle}>Discover the most premium women's clothing from top Pakistani brands.</p>
        <div className={styles.ctas}>
          <a href="/collections" className={styles.btnPrimary}>Explore Collection</a>
          <a href="/new-arrivals" className={styles.btnSecondary}>New Arrivals</a>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
