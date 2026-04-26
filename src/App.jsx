import { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Collection from './sections/Collection';
import Trends from './sections/Trends';
import Lookbook from './sections/Lookbook';
import About from './sections/About';
import Location from './sections/Location';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import Cursor from './components/Cursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for high-res images and premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer para animações de scroll
  // O rAF garante que o DOM já foi pintado antes de buscar os elementos
  useEffect(() => {
    if (!loading) {
      const raf = requestAnimationFrame(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-up').forEach((el) => {
          observer.observe(el);
        });

        // Cleanup: desconecta o observer quando o componente desmontar
        return () => observer.disconnect();
      });

      return () => cancelAnimationFrame(raf);
    }
  }, [loading]);

  return (
    <>
      <Cursor />
      {loading ? (
        <Loader />
      ) : (
        <div className="app-container">
          <Navbar />
          <main>
            <Hero />
            <Collection />
            <Trends />
            <Lookbook />
            <About />
            <Location />
            <Contact />
            <FAQ />
          </main>
          <Footer />
          <WhatsApp />
        </div>
      )}
    </>
  );
}

export default App;
