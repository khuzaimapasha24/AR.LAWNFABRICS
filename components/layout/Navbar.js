'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

const categories = [
  { name: 'Lawn Collection', href: '/collections?c=Lawn', desc: 'Premium printed & embroidered lawn suits' },
  { name: 'Chiffon & Silk', href: '/collections?c=Chiffon', desc: 'Luxury formal & party wear' },
  { name: 'Bridal Couture', href: '/collections?c=Bridal', desc: 'Exquisite wedding collections' },
  { name: 'Ready to Wear', href: '/collections?c=Pret', desc: 'Trendy pret & stitched wear' },
];

const brands = ['Sana Safinaz', 'Maria B', 'Gul Ahmed', 'Khaadi', 'Elan', 'Sapphire'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(null); // 'collections' | 'brands' | null
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { totalItems } = useCart();
  
  // Hydration fix for Cart Badge
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/collections?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Hamburger */}
          <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            <span className={`${styles.hLine} ${mobileOpen ? styles.hOpen : ''}`} />
            <span className={`${styles.hLine} ${mobileOpen ? styles.hOpen : ''}`} />
          </button>

          {/* Logo */}
          <Link href="/" className={styles.logo} onClick={() => { setMobileOpen(false); setMegaOpen(null); }}>
            <span className={styles.logoMain}>AR.LAWN</span>
            <span className={styles.logoSub}>LUXURY FABRICS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.nav}>
            <div
              className={styles.navItem}
              onMouseEnter={() => setMegaOpen('collections')}
              onMouseLeave={() => setMegaOpen(null)}
            >
              <Link href="/collections" className={styles.navLink}>Collections</Link>
              {megaOpen === 'collections' && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaGrid}>
                    {categories.map((cat, i) => (
                      <Link href={cat.href} key={i} className={styles.megaCard}>
                        <h4 className={styles.megaCardTitle}>{cat.name}</h4>
                        <p className={styles.megaCardDesc}>{cat.desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              className={styles.navItem}
              onMouseEnter={() => setMegaOpen('brands')}
              onMouseLeave={() => setMegaOpen(null)}
            >
              <Link href="/brands" className={styles.navLink}>Brands</Link>
              {megaOpen === 'brands' && (
                <div className={styles.megaMenu}>
                  <div className={styles.megaBrandsList}>
                    {brands.map((b, i) => (
                      <Link href={`/collections?b=${encodeURIComponent(b)}`} key={i} className={styles.megaBrandLink}>{b}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/new-arrivals" className={styles.navLink}>New Arrivals</Link>
            <Link href="/sale" className={styles.navLink}><span className={styles.saleBadge}>Sale</span></Link>
            <Link href="/about" className={styles.navLink}>About</Link>
          </nav>

          {/* Icons */}
          <div className={styles.actions}>
            <button className={styles.iconBtn} onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <Link href="/wishlist" className={styles.iconBtn} aria-label="Wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </Link>
            <Link href="/cart" className={styles.iconBtn} aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
              {mounted && totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
            </Link>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div className={styles.searchOverlay} onClick={() => setSearchOpen(false)}>
          <form className={styles.searchBox} onClick={(e) => e.stopPropagation()} onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Search collections, brands..." 
              className={styles.searchInput} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus 
            />
            <button type="submit" className={styles.searchSubmit} aria-label="Submit search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <button type="button" className={styles.searchClose} onClick={() => setSearchOpen(false)}>✕</button>
          </form>
        </div>
      )}

      {/* Mobile Drawer */}
      <div className={`${styles.drawer} ${mobileOpen ? styles.drawerOpen : ''}`}>
        <nav className={styles.drawerNav}>
          <Link href="/collections" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>Collections</Link>
          <Link href="/brands" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>Brands</Link>
          <Link href="/new-arrivals" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>New Arrivals</Link>
          <Link href="/sale" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>Sale</Link>
          <Link href="/about" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/contact" className={styles.drawerLink} onClick={() => setMobileOpen(false)}>Contact</Link>
        </nav>
        <div className={styles.drawerFooter}>
          <a href="tel:+923022307708" className={styles.drawerContact}>Call: 0302-2307708</a>
        </div>
      </div>
    </>
  );
}
