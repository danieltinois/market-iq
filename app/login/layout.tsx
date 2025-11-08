import type { Metadata } from 'next';
import './login.css';

export const metadata: Metadata = {
  title: 'Market IQ - Entrar',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
