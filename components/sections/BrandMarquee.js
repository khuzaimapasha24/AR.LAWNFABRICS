import styles from './BrandMarquee.module.css';

const brandNames = ['SANA SAFINAZ', 'MARIA B', 'GUL AHMED', 'KHAADI', 'ELAN', 'SAPPHIRE', 'ALKARAM', 'NISHAT LINEN', 'BONANZA', 'JUNAID JAMSHED'];

export default function BrandMarquee() {
  const doubled = [...brandNames, ...brandNames];
  return (
    <section className={styles.section}>
      <div className={styles.track}>
        {doubled.map((name, i) => (
          <span key={i} className={styles.brand}>
            {name}
            <span className={styles.dot}>✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
