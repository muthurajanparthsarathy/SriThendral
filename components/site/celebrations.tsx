'use client';
import { AnimatePresence, motion } from 'motion/react';
import { Check, MessageCircle } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { MovingBorderLink } from '@/components/ui/moving-border';
import { occasions } from '@/lib/site';
import { ease } from '@/lib/utils';

export function Celebrations({ occasion, setOccasion, enquiry }: { occasion: string; setOccasion: (o: string) => void; enquiry: string }) {
  const label = occasion.toLowerCase();
  return (
    <section id="celebrations" className="celebrations section">
      <Reveal>
        <p className="eyebrow">EVERY OCCASION HAS A STORY</p>
        <h2>Big days.<br/>Close-knit gatherings.<br/><em>All worth celebrating.</em></h2>
        <p>Tell us what you’re celebrating. We’ll help you find the right mix of services for your people, your traditions and your plans.</p>
      </Reveal>
      <Reveal className="occasion-panel" delay={0.15}>
        <p className="eyebrow">WHAT’S YOUR OCCASION?</p>
        <div className="occasion-options" role="group" aria-label="Choose your occasion">
          {occasions.map(x => {
            const selected = occasion === x;
            return (
              <motion.button key={x} className={selected ? 'selected' : undefined} aria-pressed={selected} onClick={() => setOccasion(x)} whileTap={{ scale: 0.95 }}>
                {selected && <motion.span layoutId="occasion-pill" className="occasion-pill" transition={{ type: 'spring', stiffness: 400, damping: 32 }}/>}
                <span className="occasion-label">{x}</span>
                <AnimatePresence initial={false}>
                  {selected && (
                    <motion.span className="occasion-check" initial={{ width: 0, opacity: 0, scale: 0 }} animate={{ width: 23, opacity: 1, scale: 1 }} exit={{ width: 0, opacity: 0, scale: 0 }} transition={{ duration: 0.25 }}>
                      <Check size={16}/>
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
        <div className="occasion-summary">
          <span>LET’S MAKE IT YOURS</span>
          <h3>
            Your{' '}
            <AnimatePresence mode="wait" initial={false}>
              <motion.em key={label} className="occasion-word" initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -14, filter: 'blur(6px)' }} transition={{ duration: 0.3, ease }}>
                {label}
              </motion.em>
            </AnimatePresence>,<br/>our attention to detail.
          </h3>
          <MovingBorderLink href={enquiry} target="_blank" rel="noopener noreferrer" className="button light">
            <MessageCircle size={18}/> Discuss your {label}
          </MovingBorderLink>
          <small>Start a conversation on WhatsApp</small>
        </div>
      </Reveal>
    </section>
  );
}
