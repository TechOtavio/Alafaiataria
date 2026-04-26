import imgFull from '../assets/images/lookbook_full.png';
import imgDetail1 from '../assets/images/lookbook_detail_1.png';
import imgDetail2 from '../assets/images/lookbook_detail_2.png';
import imgCasual from '../assets/images/lookbook_casual.png';
import { useState } from 'react';
import './Lookbook.css';

const Lookbook = () => {
  const [lightbox, setLightbox] = useState(null);

  // Cada item tem uma classe CSS que define o grid-area no layout Masonry
  const images = [
    {
      src: imgFull,
      alt: 'Lookbook: Terno azul marinho completo — Alfaiataria Bespoke',
      layout: 'featured'
    },
    {
      src: imgDetail1,
      alt: 'Lookbook: Detalhe das mãos do alfaiate — Excelência e Tradição',
      layout: 'small'
    },
    {
      src: imgDetail2,
      alt: 'Lookbook: Detalhe de lapela com pin dourado — Acabamento Premium',
      layout: 'tall'
    },
    {
      src: imgCasual,
      alt: 'Lookbook: Estilo Casual Chic em Linho — Conforto e Elegância',
      layout: 'small'
    }
  ];

  return (
    <section id="lookbook" className="lookbook-section section-padding">
      <div className="container">
        <div className="section-header fade-up">
          <h4 className="section-subtitle">Galeria</h4>
          <h2 className="section-title">Lookbook</h2>
          <div className="section-line"></div>
        </div>

        <div className="lookbook-grid">
          {images.map((img, index) => (
            <button
              key={img.alt}
              className={`lookbook-item fade-up lookbook-item--${img.layout}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
              onClick={() => setLightbox(img)}
              aria-label={`Ampliar: ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width="600"
                height="800"
              />
              <div className="lookbook-overlay">
                <div className="lookbook-icon">+</div>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox simples */}
        {lightbox && (
          <div
            className="lookbook-lightbox"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Visualizador de imagem"
          >
            <button
              className="lookbook-lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label="Fechar"
            >
              &times;
            </button>
            <img src={lightbox.src} alt={lightbox.alt} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Lookbook;
