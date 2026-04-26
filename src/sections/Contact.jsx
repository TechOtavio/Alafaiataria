import { useState } from 'react';
import './Contact.css';

// TODO: Substitua pela URL real do seu formulário Formspree após criar a conta em formspree.io
// Exemplo: 'https://formspree.io/f/SEU_ID_AQUI'
const FORMSPREE_URL = 'https://formspree.io/f/xpwzkldr';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Terno Sob Medida'
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    // Updater funcional evita stale state em updates rápidos (closures)
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', phone: '', interest: 'Terno Sob Medida' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="contact-section">
      <div className="contact-background">
        <div className="contact-overlay"></div>
      </div>

      <div className="container contact-container">
        <div className="contact-glass-card fade-up">

          {status === 'success' ? (
            <div className="contact-success">
              <div className="success-icon">
                <svg viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="26" cy="26" r="25" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M15 26L22 33L37 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="contact-title">Convite Enviado</h2>
              <p className="contact-desc">
                Recebemos seu interesse. O Mestre Alfaiate entrará em contato nas próximas 24 horas para confirmar sua sessão privada.
              </p>
              <button
                className="btn-elegant"
                style={{ marginTop: '2rem' }}
                onClick={() => setStatus('idle')}
              >
                <span>N O V O  C O N T A T O</span>
              </button>
            </div>
          ) : (
            <>
              <div className="contact-header">
                <h4 className="contact-subtitle">Sua Medida Exata</h4>
                <h2 className="contact-title">Inicie sua Experiência</h2>
                <p className="contact-desc">
                  Preencha os dados abaixo para receber um contato exclusivo do nosso ateliê e agendar sua sessão privada.
                </p>
              </div>

              <form className="minimal-form" onSubmit={handleSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder=" "
                  />
                  <label>Nome Completo</label>
                </div>

                <div className="form-row-minimal">
                  <div className="input-group">
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label>E-mail</label>
                  </div>

                  <div className="input-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      placeholder=" "
                    />
                    <label>Telefone / WhatsApp</label>
                  </div>
                </div>

                <div className="input-group select-group">
                  <select name="interest" value={formState.interest} onChange={handleChange}>
                    <option value="Terno Sob Medida">Terno Sob Medida</option>
                    <option value="Casamento">Traje para Casamento</option>
                    <option value="Camisaria">Camisaria Exclusiva</option>
                    <option value="Ajustes Premium">Ajustes Premium</option>
                    <option value="Consultoria de Estilo">Consultoria de Estilo</option>
                  </select>
                  <label className="select-label">Interesse Principal</label>
                </div>

                {status === 'error' && (
                  <p className="contact-error">Ocorreu um erro. Tente novamente ou chame pelo WhatsApp.</p>
                )}

                <button
                  type="submit"
                  className="btn-elegant"
                  disabled={status === 'sending'}
                >
                  <span>{status === 'sending' ? 'E N V I A N D O...' : 'A G E N D A R'}</span>
                </button>
              </form>
            </>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;
