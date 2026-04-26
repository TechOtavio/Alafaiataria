import { useEffect, useRef, useState } from 'react';
import './About.css';

const useCounter = (target, duration = 1500, trigger) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
};

const About = () => {
  const [triggered, setTriggered] = useState(false);
  const badgeRef = useRef(null);
  const years = useCounter(30, 1500, triggered);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (badgeRef.current) observer.observe(badgeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-image fade-up">
            <img
              src="/images/about.png"
              alt="Interior do ateliê da Alfaiataria Bespoke em São Paulo"
              loading="lazy"
              width="800"
              height="1000"
            />
            <div className="about-experience" ref={badgeRef}>
              <span className="years">{years}+</span>
              <span className="label">Anos de<br/>Tradição</span>
            </div>
          </div>
          <div className="about-content fade-up" style={{ transitionDelay: '0.2s' }}>
            <h4 className="section-subtitle">Nossa História</h4>
            <h2 className="section-title">O Mestre Alfaiate</h2>
            <p className="about-text">
              Fundada em valores de perfeccionismo e exclusividade, nossa alfaiataria tem vestido as personalidades mais distintas ao longo de décadas. Cada terno é um projeto único, onde a tesoura do mestre encontra os melhores tecidos do mundo.
            </p>
            <p className="about-text">
              Não vendemos roupas; entregamos armaduras modernas que projetam a sua melhor versão. O processo minucioso garante que cada milímetro seja ajustado à sua anatomia, proporcionando um conforto inigualável e uma estética impecável.
            </p>
            <div className="signature">
              <p>Mestre Alfaiate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
