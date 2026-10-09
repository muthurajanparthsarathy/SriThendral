'use client';
import type { PointerEvent, ReactNode } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'motion/react';
import { cn } from '@/lib/utils';

// Aceternity UI "Card Spotlight": a radial glow follows the pointer across the card.
export function CardSpotlight({ children, className, color = 'rgba(224,188,126,0.16)', radius = 320 }: { children: ReactNode; className?: string; color?: string; radius?: number }) {
  const x = useMotionValue(-radius);
  const y = useMotionValue(-radius);
  const background = useMotionTemplate`radial-gradient(${radius}px circle at ${x}px ${y}px, ${color}, transparent 70%)`;
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };
  return (
    <article onPointerMove={onMove} className={cn('group relative', className)}>
      <motion.div aria-hidden className="card-glow pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background }} />
      {children}
    </article>
  );
}
