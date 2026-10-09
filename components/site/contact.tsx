'use client';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Spotlight } from '@/components/ui/spotlight';
import { SparklesCore } from '@/components/ui/sparkles';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import { contacts, whatsapp } from '@/lib/site';

export function Contact() {
  return (
    <section id="contact" className="contact section">
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-40"/>
      <SparklesCore count={70}/>
      <div className="contact-inner">
        <Reveal as="p" className="eyebrow">YOUR NEXT BEAUTIFUL MEMORY STARTS HERE</Reveal>
        <TextGenerateEffect as="h2" inView lines={[['Let’s', 'bring', 'your'], [{ text: 'celebration', em: true }, { text: 'to', em: true }, { text: 'life.', em: true }]]} delay={0.1}/>
        <Reveal as="p" lang="ta" className="tamil" delay={0.3}>பந்தல் முதல் பந்தி வரை — நாங்கள் இருக்கிறோம்.</Reveal>
        <div className="contact-cards">
          {contacts.map(([name, phone], i) => (
            <Reveal key={phone} delay={0.2 + i * 0.12}>
              <CardSpotlight className="contact-card">
                <span className="contact-kicker">LET’S TALK</span>
                <h3>{name}</h3>
                <a className="phone" href={`tel:+91${phone}`}>+91 {phone.slice(0, 5)} {phone.slice(5)}</a>
                <div className="contact-actions">
                  <a href={`tel:+91${phone}`}><Phone size={16}/> Call now</a>
                  <a target="_blank" rel="noopener noreferrer" href={whatsapp('Vanakkam! I would like to enquire about event arrangements with ST Sri Thendral.', phone)}><MessageCircle size={17}/> WhatsApp</a>
                </div>
              </CardSpotlight>
            </Reveal>
          ))}
        </div>
        <Reveal className="location" delay={0.3} y={12}><MapPin size={17}/> Pollachi, Tamil Nadu <span>•</span> Tamil & English enquiries welcome</Reveal>
      </div>
    </section>
  );
}
