'use client';
import { createContext, useContext, useRef, useState, type ReactNode, type PointerEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

// Aceternity UI "3D Card Effect": the card tilts towards the pointer and its layers lift off at different depths.
// Adapted to use springs for smoother motion, a gold pointer glow, and to stay flat for touch and reduced-motion users.
const MouseEnterContext = createContext(false);

export function CardContainer({ children, className, containerClassName, maxTilt = 7 }: { children: ReactNode; className?: string; containerClassName?: string; maxTilt?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const reduce = useReducedMotion();
  const spring = { stiffness: 170, damping: 18, mass: 0.6 };
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const glow = useMotionTemplate`radial-gradient(380px circle at ${glowX}% ${glowY}%, rgba(210,174,114,0.22), transparent 55%)`;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    glowX.set(px * 100);
    glowY.set(py * 100);
    if (reduce) return;
    rotateY.set((px - 0.5) * maxTilt * 2);
    rotateX.set((0.5 - py) * maxTilt * 2);
  };
  const onLeave = () => { setEntered(false); rotateX.set(0); rotateY.set(0); };

  return (
    <MouseEnterContext.Provider value={entered && !reduce}>
      <div className={cn('[perspective:1100px]', containerClassName)}>
        <motion.div
          ref={ref}
          onPointerEnter={e => e.pointerType === 'mouse' && setEntered(true)}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          className={cn('relative', className)}
        >
          {children}
          <motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500" style={{ background: glow, opacity: entered ? 1 : 0 }} />
        </motion.div>
      </div>
    </MouseEnterContext.Provider>
  );
}

type CardItemProps = {
  as?: 'div' | 'p' | 'h3' | 'a' | 'span';
  children?: ReactNode;
  className?: string;
  translateX?: number;
  translateY?: number;
  translateZ?: number;
  rotateZ?: number;
  [prop: string]: unknown;
};

export function CardItem({ as = 'div', children, className, translateX = 0, translateY = 0, translateZ = 0, rotateZ = 0, ...rest }: CardItemProps) {
  const entered = useContext(MouseEnterContext);
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      animate={entered ? { x: translateX, y: translateY, z: translateZ, rotateZ } : { x: 0, y: 0, z: 0, rotateZ: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
