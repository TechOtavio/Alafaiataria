import { MapPin, Clock, Phone } from 'lucide-react';
import './Location.css';

const Location = () => {
  return (
    <section id="localizacao" className="location-section section-padding">
      <div className="container">
        <div className="location-grid">
          <div className="location-info fade-up">
            <h4 className="section-subtitle">Onde nos encontrar</h4>
            <h2 className="section-title">Nosso Ateliê</h2>
            
            <div className="info-blocks">
              <div className="info-block">
                <MapPin className="info-icon" />
                <div>
                  <h3>Endereço</h3>
                  {/* TODO: Substituir pelo endereço real do ateliê */}
                  <p>Av. da Elegância, 1234 - Jardins<br/>São Paulo, SP</p>
                </div>
              </div>
              
              <div className="info-block">
                <Clock className="info-icon" />
                <div>
                  <h3>Horário de Atendimento</h3>
                  <p>Segunda a Sexta: 09:00 - 19:00<br/>Sábado: 10:00 - 15:00<br/>(Apenas com hora marcada)</p>
                </div>
              </div>
              
              <div className="info-block">
                <Phone className="info-icon" />
                <div>
                  <h3>Contato Direto</h3>
                  {/* TODO: Substituir pelo telefone e e-mail reais */}
                  <p>+55 11 99999-9999<br/>contato@alfaiatariapremium.com</p>
                </div>
              </div>
            </div>
            
            <a href="#contato" className="btn-primary mt-4">Agendar Visita</a>
          </div>
          
          <div className="location-image fade-up" style={{ transitionDelay: '0.2s' }}>
            <img
              src="/images/location.png"
              alt="Fachada da Alfaiataria Bespoke — Jardins, São Paulo"
              loading="lazy"
              width="800"
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
