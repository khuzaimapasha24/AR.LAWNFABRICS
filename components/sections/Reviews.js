'use client';
import { useState } from 'react';
import StarRating from '../ui/StarRating';
import styles from './Reviews.module.css';

const initialReviews = [
  { id: 1, author: 'Ayesha K.', date: 'Oct 12, 2023', rating: 5, text: 'The fabric is incredibly soft and the embroidery is stunning! Will definitely buy more.' },
  { id: 2, author: 'Sara M.', date: 'Sep 28, 2023', rating: 4, text: 'Very nice quality. The color is slightly darker than the picture but still beautiful.' }
];

export default function Reviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.trim()) return;
    
    const review = {
      id: Date.now(),
      author: 'Guest User',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      rating,
      text: newReview
    };
    
    setReviews([review, ...reviews]);
    setNewReview('');
    setRating(5);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Customer Reviews</h3>
      
      <div className={styles.writeReview}>
        <h4 className={styles.subtitle}>Write a Review</h4>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.ratingSelect}>
            <span>Rating: </span>
            <select value={rating} onChange={(e) => setRating(Number(e.target.value))} className={styles.select}>
              <option value={5}>5 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={2}>2 Stars</option>
              <option value={1}>1 Star</option>
            </select>
          </div>
          <textarea 
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Share your thoughts about this product..."
            className={styles.textarea}
            rows={4}
          />
          <button type="submit" className={styles.submitBtn}>Submit Review</button>
        </form>
      </div>

      <div className={styles.list}>
        {reviews.map(review => (
          <div key={review.id} className={styles.review}>
            <div className={styles.header}>
              <span className={styles.author}>{review.author}</span>
              <span className={styles.date}>{review.date}</span>
            </div>
            <StarRating rating={review.rating} size={14} />
            <p className={styles.text}>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
