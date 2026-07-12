'use client';
import { useEffect, useState } from 'react';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1800);
    const remove = setTimeout(() => setVisible(false), 2400);
    return () => { clearTimeout(timer); clearTimeout(remove); };
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.overlay} ${fadeOut ? styles.fadeOut : ''}`}>
      <div className={styles.content}>
        <div className={styles.logoText}>AR.LAWN</div>
        <div className={styles.tagline}>LUXURY FABRICS</div>
        <div className={styles.loader}>
          <div className={styles.loaderBar} />
        </div>
      </div>
    </div>
  );
}
