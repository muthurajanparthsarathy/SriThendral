'use client';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { Highlight } from '@/components/ui/hero-highlight';
import { CountUp } from '@/components/ui/count-up';
import { YEARS_OF_EXPERIENCE, services } from '@/lib/site';

const stats = [
  { value: <CountUp to={YEARS_OF_EXPERIENCE}/>, label: 'Years of experience' },
  { value: <CountUp to={services.length}/>, label: 'Services under one roof' },
  { value: 'A–Z', label: 'One team for every detail' },
];

export function About() {
  return (
    <section id="about" className="about section">
      <Reveal as="p" className="eyebrow">THE SRI THENDRAL WAY</Reveal>
      <div>
        <Reveal as="h2">You make the memories.<br/><em>We mind the details.</em></Reveal>
        <div className="about-bottom">
          <Reveal as="p" delay={0.1}>
            A celebration is more than a beautiful stage. It’s the food shared, the music that fills the room, and the comfort of having your people close. For <Highlight>{YEARS_OF_EXPERIENCE} years</Highlight>, our A to Z team has been bringing it all together, so you can be present for what matters.
          </Reveal>
          <Reveal className="promise" delay={0.2}><Check size={18}/><span>One team to coordinate<br/>your entire celebration</span></Reveal>
        </div>
        <div className="stats">
          {stats.map(({ value, label }, i) => (
            <Reveal key={label} className="stat" delay={0.1 + i * 0.12}>
              <strong>{value}</strong>
              <span>{label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
