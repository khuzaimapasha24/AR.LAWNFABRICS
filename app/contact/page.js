'use client';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}><h1 className={styles.heroTitle}>Contact Us</h1><p className={styles.heroSub}>We'd love to hear from you.</p></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          <ScrollReveal>
            <div className={styles.infoCard}>
              <h3>Get in Touch</h3>
              <div className={styles.infoItem}><span className={styles.infoIcon}>📞</span><div><strong>Phone / WhatsApp</strong><p>0302-2307708</p></div></div>
              <div className={styles.infoItem}><span className={styles.infoIcon}>✉️</span><div><strong>Email</strong><p>info@arlawn.pk</p></div></div>
              <div className={styles.infoItem}><span className={styles.infoIcon}>📍</span><div><strong>Location</strong><p>Pakistan</p></div></div>
              <div className={styles.socialRow}>
                <a href="#" className={styles.socialLink}>Instagram</a>
                <a href="#" className={styles.socialLink}>Facebook</a>
                <a href="#" className={styles.socialLink}>TikTok</a>
                <a href="#" className={styles.socialLink}>LinkedIn</a>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <h3>Send a Message</h3>
              <input type="text" placeholder="Your Name" className={styles.input} required />
              <input type="email" placeholder="Your Email" className={styles.input} required />
              <input type="text" placeholder="Subject" className={styles.input} />
              <textarea placeholder="Your Message" className={styles.textarea} rows={5} required />
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
