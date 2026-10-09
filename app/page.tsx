'use client';
import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { SiteHeader } from '@/components/site/header';
import { Hero } from '@/components/site/hero';
import { About } from '@/components/site/about';
import { Services } from '@/components/site/services';
import { Celebrations } from '@/components/site/celebrations';
import { Process } from '@/components/site/process';
import { Faq } from '@/components/site/faq';
import { Contact } from '@/components/site/contact';
import { FloatingChat } from '@/components/site/floating-chat';
import { Reveal } from '@/components/reveal';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { whatsapp } from '@/lib/site';

const ribbon = ['Weddings', 'Receptions', 'Engagements', 'Birthdays', 'Family occasions', 'Memorable gatherings'];

export default function Home() {
  const [occasion, setOccasion] = useState('Wedding');
  const enquiry = whatsapp(`Vanakkam ST Sri Thendral! I would like to plan a ${occasion.toLowerCase()} in Pollachi. Please share your availability and service details.`);
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip" href="#main">Skip to content</a>
      <SiteHeader/>
      <main id="main">
        <Hero/>
        <div className="service-ribbon">
          <span>CELEBRATE, WE’LL TAKE CARE OF THE REST</span>
          <InfiniteMovingCards className="ribbon-marquee" itemClassName="ribbon-item" speed={36} items={ribbon.map(x => <>{x}<i>✦</i></>)}/>
        </div>
        <About/>
        <Services/>
        <Celebrations occasion={occasion} setOccasion={setOccasion} enquiry={enquiry}/>
        <Process/>
        <Faq/>
        <Contact/>
      </main>
      <Reveal as="footer" y={16}>
        <a className="brand" href="#"><span className="monogram">ST<span>✦</span></span><span><strong>Sri Thendral</strong><small>A TO Z TEAM</small></span></a>
        <p>With care. With tradition. With you.</p>
        <small>© {new Date().getFullYear()} ST Sri Thendral. All rights reserved.</small>
      </Reveal>
      <FloatingChat href={enquiry}/>
    </MotionConfig>
  );
}
