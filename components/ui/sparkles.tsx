import { cn } from '@/lib/utils';

// Aceternity UI "Sparkles", rebuilt without a particle engine: CSS-twinkling gold specks.
// Positions come from a seeded generator so the server and browser render identical markup.
function seeded(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function SparklesCore({ count = 60, color = '#e8c98f', seed = 11, className }: { count?: number; color?: string; seed?: number; className?: string }) {
  const random = seeded(seed);
  const round = (n: number) => Math.round(n * 100) / 100;
  const specks = Array.from({ length: count }, () => ({
    left: round(random() * 100),
    top: round(random() * 100),
    size: round(1 + random() * 2.2),
    delay: round(random() * 6),
    duration: round(2.6 + random() * 4),
  }));
  return (
    <div aria-hidden className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      {specks.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full opacity-0 animate-twinkle motion-reduce:animate-none motion-reduce:opacity-60"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, background: color, boxShadow: `0 0 ${s.size * 3}px ${color}`, animationDelay: `${s.delay}s`, animationDuration: `${s.duration}s` }}
        />
      ))}
    </div>
  );
}
