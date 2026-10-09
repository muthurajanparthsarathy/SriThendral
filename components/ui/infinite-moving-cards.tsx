import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Aceternity UI "Infinite Moving Cards": an endless, edge-faded marquee. The list is rendered twice so the loop is seamless;
// the copy is hidden from assistive technology. Pauses on hover and stops for reduced-motion users.
export function InfiniteMovingCards({ items, speed = 40, direction = 'left', pauseOnHover = true, className, itemClassName }: {
  items: ReactNode[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
}) {
  const list = (copy: boolean) => items.map((item, i) => (
    <li key={`${copy}-${i}`} aria-hidden={copy || undefined} className={cn('shrink-0', itemClassName)}>{item}</li>
  ));
  return (
    <div className={cn('relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]', className)}>
      <ul
        className={cn('m-0 flex w-max list-none flex-nowrap p-0 animate-marquee motion-reduce:animate-none', pauseOnHover && 'hover:[animation-play-state:paused]')}
        style={{ animationDuration: `${speed}s`, animationDirection: direction === 'left' ? 'normal' : 'reverse' }}
      >
        {list(false)}
        {list(true)}
      </ul>
    </div>
  );
}
