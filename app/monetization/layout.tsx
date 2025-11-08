import type { Metadata } from 'next';
import '../../styles/home.css';
import './monetization.css';

export const metadata: Metadata = {
  title: 'Market IQ - Planos de serviço',
};

export default function MonetizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
