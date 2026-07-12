'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, totalItems, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          address: `${formData.address}, ${formData.city}`,
          totalAmount: totalPrice,
          items: cart.map(item => ({ id: item.id, quantity: item.quantity, price: item.price }))
        })
      });
      
      if (res.ok) {
        clearCart();
        alert('🎉 Order Placed Successfully!');
        router.push('/');
      } else {
        alert('Failed to place order. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error placing order.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.hero}><h1 className={styles.heroTitle}>Checkout</h1></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.secTitle}>Shipping Details</h3>
            <div className={styles.row}>
              <input type="text" name="firstName" onChange={handleChange} placeholder="First Name" className={styles.input} required />
              <input type="text" name="lastName" onChange={handleChange} placeholder="Last Name" className={styles.input} required />
            </div>
            <input type="email" name="email" onChange={handleChange} placeholder="Email Address" className={styles.input} required />
            <input type="tel" name="phone" onChange={handleChange} placeholder="Phone Number" className={styles.input} required />
            <input type="text" name="address" onChange={handleChange} placeholder="Full Address" className={styles.input} required />
            <div className={styles.row}>
              <input type="text" name="city" onChange={handleChange} placeholder="City" className={styles.input} required />
              <input type="text" placeholder="Postal Code" className={styles.input} />
            </div>

            <h3 className={styles.secTitle} style={{marginTop: '2rem'}}>Payment Method</h3>
            <label className={styles.radio}><input type="radio" name="payment" defaultChecked /> Cash on Delivery</label>
            <label className={styles.radio}><input type="radio" name="payment" /> JazzCash / EasyPaisa</label>
            <label className={styles.radio}><input type="radio" name="payment" /> Bank Transfer</label>

            <button type="submit" className={styles.placeOrder} disabled={loading}>
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </form>

          <div className={styles.summary}>
            <h3 className={styles.secTitle}>Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} className={styles.summaryItem} style={{fontSize: '0.9rem', color: '#ccc'}}>
                <span>{item.title} (x{item.quantity})</span>
                <span>Rs. {(item.price * item.quantity).toLocaleString()}</span>
              </div>
            ))}
            <div className={styles.summaryItem} style={{marginTop: '1rem', borderTop: '1px solid #333', paddingTop: '1rem'}}>
              <span>Subtotal</span><span>Rs. {totalPrice.toLocaleString()}</span>
            </div>
            <div className={styles.summaryItem}><span>Shipping</span><span>Free</span></div>
            <div className={`${styles.summaryItem} ${styles.total}`}><span>Total</span><span>Rs. {totalPrice.toLocaleString()}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
