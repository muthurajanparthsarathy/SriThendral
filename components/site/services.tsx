'use client';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { CardContainer, CardItem } from '@/components/ui/3d-card';
import { photoSet, services, whatsapp, type Service } from '@/lib/site';
import { ease } from '@/lib/utils';

function ServiceCard({ service: { name, tamil, text, Icon, photo, alt }, index }: { service: Service; index: number }) {
  const image = photoSet(photo);
  return (
    <motion.div
      className="service-cell"
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease }}
    >
      <CardContainer className="service-card">
        <CardItem translateZ={36} className="service-media">
          <img src={image.src} srcSet={image.srcSet} sizes="(max-width: 420px) 90vw, (max-width: 1100px) 45vw, 22vw" alt={alt} width={720} height={576} loading="lazy" decoding="async"/>
          <span className="service-no">{String(index + 1).padStart(2, '0')}</span>
        </CardItem>
        <CardItem translateZ={64} className="service-icon"><Icon size={22} strokeWidth={1.5}/></CardItem>
        <div className="service-body">
          <CardItem as="h3" translateZ={34}>{name}</CardItem>
          <CardItem as="p" translateZ={22} className="service-tamil" lang="ta">{tamil}</CardItem>
          <CardItem as="p" translateZ={16}>{text}</CardItem>
          <CardItem
            as="a"
            translateZ={42}
            className="service-link"
            href={whatsapp(`Vanakkam ST Sri Thendral! I would like to know more about your ${name.toLowerCase()} service for my event.`)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${name} on WhatsApp`}
          >
            Enquire <ArrowUpRight size={16}/>
          </CardItem>
        </div>
      </CardContainer>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="services section">
      <div className="section-heading">
        <Reveal>
          <p className="eyebrow">FROM PANDAL TO PANDHI</p>
          <h2>Every detail.<br/><em>Beautifully taken care of.</em></h2>
        </Reveal>
        <Reveal as="p" delay={0.15}>Choose the services you need.<br/>We’ll bring them together, your way.</Reveal>
      </div>
      <div className="service-grid">
        {services.map((service, i) => <ServiceCard key={service.name} service={service} index={i}/>)}
      </div>
    </section>
  );
}
