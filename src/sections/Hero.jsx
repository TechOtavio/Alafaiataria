import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content container">
        <h3 className="fade-up hero-subtitle">Alfaiataria Premium</h3>
        <h1 className="fade-up hero-title">A Arte da Elegância<br/>Sob Medida</h1>
        <p className="fade-up hero-text">
          Descubra o caimento perfeito com nossa curadoria exclusiva de tecidos e modelagem impecável. Tradição e modernidade costuradas à mão.
        </p>
        <div className="fade-up hero-actions">
          <a href="#contato" className="btn-primary">Agende sua Consulta</a>
          <a href="#colecao" className="btn-secondary">Nossa Coleção</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
