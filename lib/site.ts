import { Utensils, Camera, Music2, Tent, Flower2, Sparkles, Store, AudioLines, type LucideIcon } from 'lucide-react';

export const YEARS_OF_EXPERIENCE = 5;

export const whatsapp = (message: string, phone = '9698895259') => `https://wa.me/91${phone}?text=${encodeURIComponent(message)}`;

// Service photos are free-to-use Unsplash images (see README for credits), served from Unsplash's CDN at the size each card needs.
const unsplash = (id: string, width: number) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&h=${Math.round(width * 0.8)}&q=70`;
export const photoSet = (id: string) => ({ src: unsplash(id, 720), srcSet: [480, 720, 960].map(w => `${unsplash(id, w)} ${w}w`).join(', ') });

export type Service = { name: string; tamil: string; text: string; Icon: LucideIcon; photo: string; alt: string };

export const services: Service[] = [
  { name: 'Catering', tamil: 'அன்புடன் ஒரு விருந்து', text: 'A generous feast, thoughtfully served. Menus and dining arrangements made for your gathering.', Icon: Utensils, photo: '1625398407796-82650a8c135f', alt: 'A traditional South Indian meal served on a banana leaf' },
  { name: 'Stage design', tamil: 'அழகான ஒரு மேடை', text: 'From floral details to the grand backdrop, a setting that feels unmistakably yours.', Icon: Flower2, photo: '1605553426886-c0a99033fda0', alt: 'A wedding stage decorated with fresh flowers, drapes and seating for the couple' },
  { name: 'Photography', tamil: 'நினைவுகள் என்றும்', text: 'The big moments and the little in-between ones, beautifully captured to revisit.', Icon: Camera, photo: '1686294588684-9607a670181c', alt: 'A couple in traditional attire framed through a round lens' },
  { name: 'Stalls', tamil: 'கொண்டாட்டத்தில் சுவை', text: 'Lively food and activity stalls that give your guests a little more to enjoy.', Icon: Store, photo: '1788618992931-a1289ef2da41', alt: 'Bowls of fresh chaat ingredients at a food stall' },
  { name: 'DJ & sound', tamil: 'இசையுடன் கொண்டாட்டம்', text: 'Music, sound and a dance-floor atmosphere to keep your celebration moving.', Icon: Music2, photo: '1597363751172-8f923bb6d90a', alt: 'A DJ console set up at a celebration' },
  { name: 'Iyer services', tamil: 'மரபுடன் ஒரு தொடக்கம்', text: 'Priest coordination for your ceremonies, with care for your family’s traditions.', Icon: Sparkles, photo: '1630764883473-e8c2056f0589', alt: 'A sacred homam fire lit for a traditional ceremony' },
  { name: 'Pandal', tamil: 'விழாவிற்கான அழகிய இடம்', text: 'Welcoming pandal and seating arrangements, planned around your venue and guests.', Icon: Tent, photo: '1786426923263-61e9699bfc39', alt: 'A pandal ceiling draped in colourful fabric with a chandelier' },
  { name: 'Mangala Vadyam', tamil: 'மங்கள இசை முழங்க', text: 'Traditional live music that brings warmth and an auspicious beginning to your day.', Icon: AudioLines, photo: '1676804899250-18a342d77e16', alt: 'A decorated traditional barrel drum' },
];

export const occasions = ['Wedding', 'Reception', 'Engagement', 'Birthday', 'Family function', 'Other celebration'];

export const steps = [
  ['Let’s talk', 'Share your occasion, date, venue and the number of guests you have in mind.'],
  ['Make it personal', 'Together, we’ll discuss your services, preferences and budget.'],
  ['Enjoy your day', 'With the arrangements agreed, our team helps bring your celebration to life.'],
];

export const faqs = [
  ['Can I book individual services?', 'Yes. Tell us which services you need, whether it’s catering, stage design or a combination. We’ll discuss the arrangements with you.'],
  ['How experienced is your team?', `We bring ${YEARS_OF_EXPERIENCE} years of experience in planning and arranging celebrations, from catering and stage design to pandal, music and ceremonies. One team coordinates it all, so you’re not juggling separate vendors.`],
  ['How do I get a quotation?', 'Call or WhatsApp Selvaraj or Chandru S with your event date, location, guest count and preferred services. The team will discuss availability and a quotation with you.'],
  ['Where are you based?', 'We’re based in Pollachi, Tamil Nadu. Share your venue location with us to confirm whether we can arrange services there.'],
  ['What should I share when I enquire?', 'Your occasion, preferred date, venue, approximate guest count and budget are a helpful start. If you’re still deciding, we can talk through your plans.'],
];

export const contacts = [['Selvaraj', '9698895259'], ['Chandru S', '6383826301']];
