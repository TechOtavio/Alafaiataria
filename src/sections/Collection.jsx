import imgExecutivo from '../assets/images/collection_executivo.png';
import imgCasamento from '../assets/images/collection_casamento.png';
import imgEsporte from '../assets/images/collection_esporte.png';
import './Collection.css';

const Collection = () => {
  const items = [
    {
      title: 'Ternos Executivos',
      desc: 'Poder e confiança para o ambiente corporativo.',
      img: imgExecutivo,
      alt: 'Terno executivo sob medida em lã italiana — Alfaiataria Bespoke'
    },
    {
      title: 'Casamentos',
      desc: 'O traje perfeito para o dia mais importante da sua vida.',
      img: imgCasamento,
      alt: 'Traje de casamento bespoke com colete e gravata — Alfaiataria Bespoke'
    },
    {
      title: 'Esporte Fino',
      desc: 'Elegância casual para eventos descontraídos.',
      img: imgEsporte,
      alt: 'Look esporte fino com blazer sob medida — Alfaiataria Bespoke'
    }
  ];

  return (
    <section id="colecao" className="collection-section section-padding">
      <div className="container">
        <div className="section-header fade-up">
          <h4 className="section-subtitle">Nossa Expertise</h4>
          <h2 className="section-title">Coleção Exclusiva</h2>
          <div className="section-line"></div>
        </div>

        <div className="collection-grid">
          {items.map((item, index) => (
            <div key={index} className="collection-card fade-up" style={{ transitionDelay: `${index * 0.2}s` }}>
              <div className="card-img-wrapper">
                <img
                  src={item.img}
                  alt={item.alt}
                  loading="lazy"
                  width="600"
                  height="800"
                />
                <div className="card-overlay">
                  <a href="#contato" className="card-btn">Saber Mais</a>
                </div>
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
