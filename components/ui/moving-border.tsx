'use client';
import { useRef, type ReactNode } from 'react';
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useReducedMotion, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';

// Aceternity UI "Moving Border": a glow travels continuously around the edge of a button.
export function MovingBorderLink({ children, href, className, containerClassName, glowClassName, duration = 3600, ...rest }: {
  children: ReactNode;
  href: string;
  className?: string;
  containerClassName?: string;
  glowClassName?: string;
  duration?: number;
  target?: string;
  rel?: string;
}) {
  return (
    <motion.a href={href} whileTap={{ scale: 0.97 }} className={cn('relative inline-flex overflow-hidden p-[2px]', containerClassName)} {...rest}>
      <span className="absolute inset-0">
        <MovingBorder duration={duration}>
          <span className={cn('block h-20 w-20 bg-[radial-gradient(#fff1cf_35%,#e0bc7e_50%,transparent_68%)] opacity-90', glowClassName)} />
        </MovingBorder>
      </span>
      <span className={cn('relative', className)}>{children}</span>
    </motion.a>
  );
}

export function MovingBorder({ children, duration = 3600 }: { children: ReactNode; duration?: number }) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue(0);
  const reduce = useReducedMotion();

  useAnimationFrame(time => {
    if (reduce) return;
    const length = pathRef.current?.getTotalLength();
    if (length) progress.set((time * (length / duration)) % length);
  });

  const x = useTransform(progress, v => pathRef.current?.getPointAtLength(v).x ?? 0);
  const y = useTransform(progress, v => pathRef.current?.getPointAtLength(v).y ?? 0);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute h-full w-full" width="100%" height="100%" aria-hidden>
        <rect fill="none" width="100%" height="100%" ref={pathRef} />
      </svg>
      <motion.span aria-hidden style={{ position: 'absolute', top: 0, left: 0, display: 'inline-block', transform }}>
        {children}
      </motion.span>
    </>
  );
}
