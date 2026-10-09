'use client';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { FlipWords } from '@/components/ui/flip-words';
import { DotBackground } from '@/components/ui/hero-highlight';
import { CountUp } from '@/components/ui/count-up';
import { YEARS_OF_EXPERIENCE } from '@/lib/site';
import { ease } from '@/lib/utils';

const fadeUp = (delay: number) => ({ initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay, ease } });

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const reduce = useReducedMotion();
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '13%']);
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  return (
    <section className="hero" id="top" ref={ref}>
      <DotBackground className="-z-10"/>
      <motion.div className="hero-copy" style={reduce ? undefined : { y: copyY }}>
        <motion.p className="eyebrow" {...fadeUp(0.1)}>
          <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.3, ease }} style={{ originX: 0 }}/> YOUR PEOPLE. YOUR TRADITIONS. YOUR DAY.
        </motion.p>
        <TextGenerateEffect lines={[['Beautiful', 'moments.'], [{ text: 'Thoughtfully', em: true }], ['brought', 'together.']]} delay={0.25} />
        <motion.p className="tamil" lang="ta" {...fadeUp(0.95)}>பந்தல் முதல் பந்தி வரை</motion.p>
        <motion.p className="flip-line" {...fadeUp(1.05)}>
          Planning your <FlipWords words={['wedding', 'reception', 'engagement', 'birthday', 'family function']} className="flip-word" /> in Pollachi?
        </motion.p>
        <motion.p className="intro" {...fadeUp(1.15)}>From the first welcome to the final feast, we bring every detail of your celebration together. One team. A whole lot of heart.</motion.p>
        <motion.div className="hero-actions" {...fadeUp(1.25)}>
          <motion.a className="button" href="#contact" whileTap={{ scale: 0.97 }}>Plan your celebration</motion.a>
          <a className="text-link" href="#services">Explore our services <ArrowRight size={15}/></a>
        </motion.div>
        <motion.div className="hero-note" {...fadeUp(1.35)}>
          <motion.span className="tiny-flower" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}>✳</motion.span>
          <span>Celebrations made personal.<br/><strong>Right here in Pollachi.</strong></span>
        </motion.div>
      </motion.div>

      <div className="hero-visual">
        <motion.div
          className="hero-frame"
          initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
          animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
          transition={{ duration: 1.35, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.img
            src="/wedding-mandapam.png"
            alt="South Indian wedding stage with jasmine, marigold flowers and warm brass lamps — design inspiration"
            fetchPriority="high"
            style={reduce ? undefined : { y: imageY }}
            initial={{ scale: 1.18 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.2, delay: 0.15, ease }}
          />
          <div className="image-shade"/>
          <motion.div className="image-label" {...fadeUp(1.2)}>
            <span>WHERE TRADITION MEETS A LITTLE MAGIC</span>
            <p>A day to cherish.<br/>A memory for a lifetime.</p>
          </motion.div>
        </motion.div>
        <motion.div className="seal" initial={{ scale: 0, rotate: -60 }} animate={{ scale: 1, rotate: 12 }} transition={{ type: 'spring', stiffness: 120, damping: 12, delay: 1.1 }} whileHover={{ rotate: -6, scale: 1.05 }}>
          <span>EVERY DETAIL</span><strong>A to Z</strong><span>ONE TEAM</span>
        </motion.div>
        <motion.div className="experience-badge" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 1.4, ease }}>
          <strong><CountUp to={YEARS_OF_EXPERIENCE} delay={1.5}/></strong>
          <span>Years of<br/>experience</span>
        </motion.div>
      </div>
    </section>
  );
}
