'use client';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from 'motion/react';
import { MapPin, Menu, X } from 'lucide-react';
import { cn, ease } from '@/lib/utils';

const links = [['Our story', 'about'], ['Services', 'services'], ['Celebrations', 'celebrations']];

// Aceternity-style floating navbar: shrinks once you scroll, slides away while scrolling down and returns on scroll up.
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useMotionValueEvent(scrollY, 'change', y => {
    const delta = y - (scrollY.getPrevious() ?? 0);
    setCompact(y > 40);
    if (Math.abs(delta) > 4) setHidden(delta > 0 && y > 520);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['top', ...links.map(([, id]) => id), 'contact'].forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const close = () => setMenuOpen(false);
  return <>
    <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden />
    <div className="topline"><span>Rooted in tradition. Made for celebration.</span><span><MapPin size={13}/> Pollachi, Tamil Nadu</span></div>
    <motion.header
      className={cn(compact && 'compact')}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: hidden && !menuOpen ? '-110%' : '0%', opacity: 1 }}
      transition={{ duration: 0.45, ease }}
    >
      <a className="brand" href="#" aria-label="ST Sri Thendral home"><span className="monogram">ST<span>✦</span></span><span><strong>Sri Thendral</strong><small>A TO Z TEAM · EVENT MANAGEMENT</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} className={active === id ? 'active' : undefined} aria-current={active === id ? 'location' : undefined}>
            {label}
            {active === id && <motion.span layoutId="nav-active" className="nav-active" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
          </a>
        ))}
        <a className="button small" href="#contact">Let’s plan your event</a>
      </nav>
      <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={menuOpen ? 'close' : 'open'} className="flex" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
            {menuOpen ? <X/> : <Menu/>}
          </motion.span>
        </AnimatePresence>
      </button>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.35, ease } }}
            exit={{ opacity: 0, y: -14, transition: { duration: 0.2 } }}
          >
            {[...links, ['Let’s plan your event', 'contact']].map(([label, id], i) => (
              <motion.a key={id} href={`#${id}`} onClick={close} className={i === links.length ? 'button' : undefined} initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0, transition: { delay: 0.05 + i * 0.06, ease } }}>
                {label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  </>;
}
