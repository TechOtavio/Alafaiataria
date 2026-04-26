import trendImg from '../assets/images/trend_modern.png';
import './Trends.css';

const Trends = () => {
  return (
    <section id="tendencias" className="trends-section section-padding">
      <div className="container">
        <div className="trends-grid">
          <div className="trends-content fade-up">
            <h4 className="section-subtitle">Vanguarda</h4>
            <h2 className="section-title">Tendências da Estação</h2>
            <p className="trends-text">
              A alfaiataria contemporânea exige mais do que um bom corte. Exige atitude. Descubra os tecidos em alta, as cores da temporada e como adaptar o clássico para os dias de hoje sem perder a essência.
            </p>
            <ul className="trends-list">
              <li>Lã Fria Super 150s</li>
              <li>Cortes Assimétricos</li>
              <li>Tons Terrosos e Midnight Blue</li>
              <li>Lapelas Peak e Notch Modernizadas</li>
            </ul>
            <a href="#contato" className="btn-secondary trends-cta">Consultoria de Estilo</a>
          </div>
          <div className="trends-image fade-up" style={{ transitionDelay: '0.2s' }}>
            <img src={trendImg} alt="Tendências Modernas de Alfaiataria" />
            <div className="trends-badge">
              <span>Nova</span>
              <strong>Coleção</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
