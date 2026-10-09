'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';

// Aceternity UI "Flip Words": cycles through words, assembling each one letter by letter.
export function FlipWords({ words, duration = 2800, className }: { words: string[]; duration?: number; className?: string }) {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (animating) return;
    const timer = setTimeout(() => { setIndex(i => (i + 1) % words.length); setAnimating(true); }, duration);
    return () => clearTimeout(timer);
  }, [animating, duration, words.length]);

  const current = words[index];
  return (
    <span className={cn('relative inline-block', className)}>
      <span className="sr-only">{words.join(', ')}</span>
      <AnimatePresence onExitComplete={() => setAnimating(false)}>
        <motion.span
          key={current}
          aria-hidden
          className="relative z-10 inline-block whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24, x: 24, filter: 'blur(8px)', scale: 1.4, position: 'absolute', left: 0 }}
          transition={{ type: 'spring', stiffness: 110, damping: 12 }}
        >
          {current.split('').map((letter, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: i * 0.045, duration: 0.25 }}
            >
              {letter === ' ' ? ' ' : letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
