import type { Metadata } from 'next';
import './register.css';

export const metadata: Metadata = {
  title: 'Market IQ - Criar Conta',
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
