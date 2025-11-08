import Clientes from '@/components/home/Clientes';
import Coletor from '@/components/home/Coletor';
import CtaBand from '@/components/home/CtaBand';
import Essencia from '@/components/home/Essencia';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import LandingFooter from '@/components/home/LandingFooter';
import LandingNavbar from '@/components/home/LandingNavbar';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <Hero />
      <Features />
      <Coletor />
      <Clientes />
      <Essencia />
      <Testimonials />
      <CtaBand />
      <LandingFooter />
    </>
  );
}
