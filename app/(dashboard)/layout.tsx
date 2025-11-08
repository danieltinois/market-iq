import Footer from '@/components/layout/Footer';
import Sidebar from '@/components/layout/Sidebar';
import Topbar from '@/components/layout/Topbar';
import '@/styles/dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Market IQ',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div id="wrapper" className="d-flex">
          <Sidebar />

          <div className="d-flex flex-column flex-grow-1" id="content-wrapper">
            <Topbar />

            <div className="container-fluid">{children}</div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
