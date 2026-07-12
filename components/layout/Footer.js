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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <defs>
                  <linearGradient id="ig-grad" x1="2.42" y1="21.58" x2="21.58" y2="2.42" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FEE411"/>
                    <stop offset="0.05" stopColor="#FEDB16"/>
                    <stop offset="0.11" stopColor="#FEC125"/>
                    <stop offset="0.17" stopColor="#FE983D"/>
                    <stop offset="0.24" stopColor="#FE5F5E"/>
                    <stop offset="0.3" stopColor="#FE2181"/>
                    <stop offset="0.47" stopColor="#9000DC"/>
                    <stop offset="0.72" stopColor="#515BD4"/>
                    <stop offset="1" stopColor="#5851DB"/>
                  </linearGradient>
                </defs>
                <rect width="24" height="24" rx="5" fill="url(#ig-grad)"/>
                <path fill="#fff" d="M16 2H8C4.691 2 2 4.691 2 8v8c0 3.309 2.691 6 6 6h8c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm3.5 14c0 1.93-1.57 3.5-3.5 3.5H8c-1.93 0-3.5-1.57-3.5-3.5V8C4.5 6.07 6.07 4.5 8 4.5h8c1.93 0 3.5 1.57 3.5 3.5v8z"/>
                <path fill="#fff" d="M12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="#fff"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#1877F2"/>
                <path fill="#fff" d="M15.83 12.07l-.53-3.47h-2.8V6.35c0-1.01.28-1.7 1.73-1.7h1.85V1.54C15.75 1.5 14.33 1.37 13.06 1.37c-3 0-5.06 1.83-5.06 5.2v2.03H5.2v3.47h2.8v8.38c1.3.2 2.64.2 3.96 0v-8.38h2.87z"/>
              </svg>
            </a>
            <a href="#" aria-label="TikTok" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="5" fill="#000"/>
                <path d="M15.5 3a4.5 4.5 0 0 0-4.5 4.5v7.1a3.4 3.4 0 1 1-3.4-3.4c.5 0 .9.1 1.4.3v-2.8a6.3 6.3 0 1 0 4.8 6.1V6.5A7.4 7.4 0 0 0 18.5 8V5a4.5 4.5 0 0 1-3-2z" fill="#00f2fe"/>
                <path d="M16 3.5a4.5 4.5 0 0 0-4.5 4.5v7.1a3.4 3.4 0 1 1-3.4-3.4c.5 0 .9.1 1.4.3v-2.8a6.3 6.3 0 1 0 4.8 6.1V7A7.4 7.4 0 0 0 19 8.5V5.5A4.5 4.5 0 0 1 16 3.5z" fill="#fe0050"/>
                <path d="M15.75 3.25a4.5 4.5 0 0 0-4.5 4.5v7.1a3.4 3.4 0 1 1-3.4-3.4c.5 0 .9.1 1.4.3v-2.8a6.3 6.3 0 1 0 4.8 6.1v-8A7.4 7.4 0 0 0 18.75 8.25v-3a4.5 4.5 0 0 1-3-2z" fill="#fff"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                <path fill="#fff" d="M7.12 20H3.55V9h3.57v11zm-1.78-12.5a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM20.45 20h-3.56v-5.41c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V20H9.46V9h3.42v1.5h.05c.47-.9 1.63-1.84 3.36-1.84 3.6 0 4.26 2.37 4.26 5.45V20h-.1z"/>
              </svg>
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
