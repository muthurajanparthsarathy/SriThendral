'use client';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

// Aceternity UI "Hero Highlight": a marker stroke sweeps under the text once it scrolls into view.
export function Highlight({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      initial={{ backgroundSize: '0% 42%' }}
      whileInView={{ backgroundSize: '100% 42%' }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.35 }}
      style={{ backgroundRepeat: 'no-repeat', backgroundPosition: 'left 88%' }}
      className={cn('relative inline bg-[linear-gradient(100deg,#f0d9a8,#e4c084)] px-0.5 font-medium text-wine', className)}
    >
      {children}
    </motion.span>
  );
}

// Aceternity UI "Dot Background": a faint dotted grid that fades out towards the edges.
export function DotBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 bg-[radial-gradient(#cfae78_1px,transparent_1px)] [background-size:22px_22px] opacity-60 [mask-image:radial-gradient(ellipse_at_30%_40%,black_10%,transparent_70%)]',
        className,
      )}
    />
  );
}
