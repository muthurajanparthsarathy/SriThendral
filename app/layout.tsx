import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'ST Sri Thendral | A to Z Event Management, Pollachi', description: 'பந்தல் முதல் பந்தி வரை. Catering, stage design, photography, stalls, DJ, Iyer, pandal and Mangala Vadyam in Pollachi. Plan your celebration with Selvaraj and Chandru S.', icons: { icon: '/favicon.svg' } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
