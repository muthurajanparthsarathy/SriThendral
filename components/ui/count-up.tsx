'use client';
import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'motion/react';

// Number ticker: counts up from zero when scrolled into view. The final value is rendered on the server so it reads correctly without JavaScript.
export function CountUp({ to, duration = 1.8, delay = 0, className }: { to: number; duration?: number; delay?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView || reduce || !ref.current) return;
    ref.current.textContent = '0';
    const controls = animate(0, to, { duration, delay, ease: [0.16, 1, 0.3, 1], onUpdate: v => { if (ref.current) ref.current.textContent = String(Math.round(v)); } });
    return () => controls.stop();
  }, [inView, reduce, to, duration, delay]);

  return <span ref={ref} className={className}>{to}</span>;
}
