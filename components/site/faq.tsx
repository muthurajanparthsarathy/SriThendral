'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { faqs } from '@/lib/site';
import { ease } from '@/lib/utils';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq section">
      <Reveal>
        <p className="eyebrow">A FEW HELPFUL DETAILS</p>
        <h2>Before the<br/><em>celebration begins.</em></h2>
      </Reveal>
      <div>
        {faqs.map(([question, answer], i) => (
          <Reveal as="article" key={question} delay={i * 0.07} y={18}>
            <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? null : i)}>
              {question}
              <motion.span className="faq-icon" animate={{ rotate: open === i ? 135 : 0 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}><Plus size={18}/></motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div id={`faq-${i}`} className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }}>
                  <p>{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
