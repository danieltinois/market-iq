import type { Metadata } from 'next';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import './globals.css';

import '@/styles/bss-overrides.css';
import '@/styles/untitled.css';

import { Geist, Geist_Mono } from 'next/font/google';

import BootstrapClient from '@/components/BootstrapClient';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Market IQ',
  description: 'Sistema de gestão e análise de vendas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
