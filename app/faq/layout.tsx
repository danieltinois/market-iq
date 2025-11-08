import type { Metadata } from 'next';
import '../../styles/home.css';
import './faq.css';

export const metadata: Metadata = {
  title: 'Market IQ - FAQ',
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
