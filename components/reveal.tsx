'use client';
import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ease } from '@/lib/utils';

type Tag = 'div' | 'p' | 'h2' | 'article' | 'span' | 'footer';

// Fades and lifts content into place the first time it scrolls into view. Renders the given tag so existing CSS selectors keep matching.
export function Reveal({ as = 'div', children, className, delay = 0, y = 28, ...rest }: {
  as?: Tag;
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  [prop: string]: unknown;
}) {
  const Component = motion[as] as typeof motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.85, delay, ease }}
      {...rest}
    >
      {children}
    </Component>
  );
}
