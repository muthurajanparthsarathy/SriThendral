'use client';
import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Reveal } from '@/components/reveal';
import { steps } from '@/lib/site';

// Aceternity-style timeline: a gold line draws through the steps as the section scrolls past.
export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 55%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });

  return (
    <section className="process section">
      <Reveal as="p" className="eyebrow">A LITTLE PLANNING. A LOT OF PEACE OF MIND.</Reveal>
      <Reveal as="h2" delay={0.1}>From “we’re planning”<br/><em>to “what a beautiful day.”</em></Reveal>
      <div className="steps" ref={ref}>
        <div className="steps-track" aria-hidden><motion.div className="steps-line" style={{ '--progress': progress } as never}/></div>
        {steps.map(([title, text], i) => (
          <Reveal as="article" key={title} delay={0.15 + i * 0.15}>
            <span>0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
