import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhySwag from '@/components/WhySwag';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div style={{ backgroundColor: '#0D0D0F' }}>
      <Nav />
      <Hero />
      <Services />
      <WhySwag />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
