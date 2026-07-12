'use client';
import { useEffect, useState } from 'react';
import styles from './CursorFollower.module.css';

export default function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = () => setHovering(true);
    const out = () => setHovering(false);

    window.addEventListener('mousemove', move);

    const interactives = document.querySelectorAll('a, button, [data-cursor-hover]');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', over);
      el.addEventListener('mouseleave', out);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', over);
        el.removeEventListener('mouseleave', out);
      });
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <div
      className={`${styles.cursor} ${hovering ? styles.hover : ''}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
}
