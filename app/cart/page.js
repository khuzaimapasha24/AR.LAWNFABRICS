'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import styles from './page.module.css';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div className={styles.page}>
      <div className={styles.hero}><h1 className={styles.heroTitle}>Shopping Cart</h1></div>
      <div className={styles.container}>
        {cart.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyIcon}>🛍️</span>
            <h2 className={styles.emptyTitle}>Your cart is empty</h2>
            <p className={styles.emptyText}>Looks like you haven't added anything to your cart yet.</p>
            <Link href="/collections" className={styles.shopBtn}>Start Shopping</Link>
          </div>
        ) : (
          <div className={styles.cartLayout}>
            <div className={styles.cartItems}>
              {cart.map(item => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImageWrap}>
                    <Image src={item.images || item.img || 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77'} alt={item.title} fill className={styles.itemImage} />
                  </div>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemBrand}>{item.brand}</span>
                    <h3 className={styles.itemName}>{item.title}</h3>
                    <p className={styles.itemPrice}>Rs. {item.price.toLocaleString()}</p>
                    <div className={styles.itemControls}>
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>✕</button>
                </div>
              ))}
            </div>
            <div className={styles.cartSummary}>
              <h3 className={styles.summaryTitle}>Order Summary</h3>
              <div className={styles.summaryRow}><span>Subtotal</span><span>Rs. {totalPrice.toLocaleString()}</span></div>
              <div className={styles.summaryRow}><span>Shipping</span><span>Calculated at checkout</span></div>
              <div className={`${styles.summaryRow} ${styles.summaryTotal}`}><span>Total</span><span>Rs. {totalPrice.toLocaleString()}</span></div>
              <Link href="/checkout" className={styles.checkoutBtn}>Proceed to Checkout</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
