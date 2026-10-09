'use client';
import { Fragment } from 'react';
import { motion, type Variants } from 'motion/react';
import { ease } from '@/lib/utils';

// Aceternity UI "Text Generate Effect": words fade in from a blur, one after another.
type Word = string | { text: string; em?: boolean };

const word: Variants = {
  hidden: { opacity: 0, y: '0.3em', filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.75, ease } },
};

export function TextGenerateEffect({ lines, as = 'h1', className, delay = 0, stagger = 0.11, inView = false }: {
  lines: Word[][];
  as?: 'h1' | 'h2' | 'p';
  className?: string;
  delay?: number;
  stagger?: number;
  inView?: boolean;
}) {
  const Tag = motion[as];
  const trigger = inView ? { whileInView: 'visible', viewport: { once: true, amount: 0.6 } } : { animate: 'visible' };
  return (
    <Tag className={className} initial="hidden" {...trigger} variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger, delayChildren: delay } } }}>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.map((w, wi) => {
            const text = typeof w === 'string' ? w : w.text;
            const span = <motion.span variants={word} className="inline-block will-change-[filter,transform]">{text}</motion.span>;
            return <Fragment key={wi}>{wi > 0 && ' '}{typeof w !== 'string' && w.em ? <em>{span}</em> : span}</Fragment>;
          })}
        </Fragment>
      ))}
    </Tag>
  );
}
