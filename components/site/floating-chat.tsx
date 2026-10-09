'use client';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function FloatingChat({ href }: { href: string }) {
  return (
    <motion.a
      className="floating-chat"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.8 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.94 }}
    >
      <span className="chat-pulse" aria-hidden/>
      <MessageCircle size={23}/><span>Let’s celebrate</span>
    </motion.a>
  );
}
