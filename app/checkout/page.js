'use client';
import styles from './page.module.css';

export default function CheckoutPage() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}><h1 className={styles.heroTitle}>Checkout</h1></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <h3 className={styles.secTitle}>Shipping Details</h3>
            <div className={styles.row}>
              <input type="text" placeholder="First Name" className={styles.input} required />
              <input type="text" placeholder="Last Name" className={styles.input} required />
            </div>
            <input type="email" placeholder="Email Address" className={styles.input} required />
            <input type="tel" placeholder="Phone Number" className={styles.input} required />
            <input type="text" placeholder="Full Address" className={styles.input} required />
            <div className={styles.row}>
              <input type="text" placeholder="City" className={styles.input} required />
              <input type="text" placeholder="Postal Code" className={styles.input} />
            </div>

            <h3 className={styles.secTitle} style={{marginTop: '2rem'}}>Payment Method</h3>
            <label className={styles.radio}><input type="radio" name="payment" defaultChecked /> Cash on Delivery</label>
            <label className={styles.radio}><input type="radio" name="payment" /> JazzCash / EasyPaisa</label>
            <label className={styles.radio}><input type="radio" name="payment" /> Bank Transfer</label>

            <button type="submit" className={styles.placeOrder}>Place Order</button>
          </form>

          <div className={styles.summary}>
            <h3 className={styles.secTitle}>Order Summary</h3>
            <div className={styles.summaryItem}><span>Subtotal</span><span>Rs. 0</span></div>
            <div className={styles.summaryItem}><span>Shipping</span><span>Free</span></div>
            <div className={`${styles.summaryItem} ${styles.total}`}><span>Total</span><span>Rs. 0</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
