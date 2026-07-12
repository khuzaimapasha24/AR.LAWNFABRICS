import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

export const metadata = { title: 'About Us | AR.LAWN' };

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}><h1 className={styles.heroTitle}>Our Story</h1><p className={styles.heroSub}>Redefining luxury fashion for the modern Pakistani woman.</p></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          <ScrollReveal className={styles.imgCol}>
            <div className={styles.imgWrap}><Image src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80" alt="About AR.LAWN" fill className={styles.img} /></div>
          </ScrollReveal>
          <ScrollReveal delay={200} className={styles.textCol}>
            <h2 className={styles.heading}>A Heritage of Elegance</h2>
            <p className={styles.text}>AR.LAWN was founded with a single mission: to bring the most exquisite and premium women's clothing brands under one unified, ultra-advanced platform. We believe luxury is not just in the fabric, but in the entire experience.</p>
            <p className={styles.text}>By partnering with top-tier fashion houses, we ensure our collections are always at the forefront of style, offering timeless classics alongside the latest seasonal trends.</p>
            <div className={styles.stats}>
              <div className={styles.stat}><span className={styles.num}>50+</span><span className={styles.lbl}>Premium Brands</span></div>
              <div className={styles.stat}><span className={styles.num}>10k+</span><span className={styles.lbl}>Happy Customers</span></div>
              <div className={styles.stat}><span className={styles.num}>24/7</span><span className={styles.lbl}>WhatsApp Support</span></div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
