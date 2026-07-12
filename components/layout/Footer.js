'use client';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <span className={styles.logoMain}>AR.LAWN</span>
            <span className={styles.logoSub}>LUXURY FABRICS</span>
          </div>
          <p className={styles.about}>
            Pakistan's most premium multi-brand women's clothing platform. We bring you the finest luxury fabrics from the top fashion houses.
          </p>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" aria-label="TikTok" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Shop</h4>
          <Link href="/collections" className={styles.link}>All Collections</Link>
          <Link href="/new-arrivals" className={styles.link}>New Arrivals</Link>
          <Link href="/brands" className={styles.link}>Our Brands</Link>
          <Link href="/sale" className={styles.link}>Sale</Link>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Help</h4>
          <Link href="/contact" className={styles.link}>Contact Us</Link>
          <Link href="#" className={styles.link}>Shipping & Returns</Link>
          <Link href="#" className={styles.link}>FAQ</Link>
          <Link href="#" className={styles.link}>Size Guide</Link>
        </div>

        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Newsletter</h4>
          <p className={styles.nlText}>Get 10% off your first order. Be the first to know about new collections.</p>
          <form className={styles.nlForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" className={styles.nlInput} required />
            <button type="submit" className={styles.nlBtn}>→</button>
          </form>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>© {new Date().getFullYear()} AR.LAWN Luxury Fabrics. All rights reserved.</p>
          <div className={styles.payments}>
            <span>JazzCash</span>
            <span>EasyPaisa</span>
            <span>Bank Transfer</span>
            <span>COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
