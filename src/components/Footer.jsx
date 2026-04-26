import { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle'); // idle | sending | success | error

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus('sending');
    // TODO: substituir pela URL real do serviço de newsletter (ex: Mailchimp, ConvertKit)
    // Por ora, simula sucesso após 1s para demonstrar o fluxo de UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    setNewsletterStatus('success');
    setNewsletterEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        
        {/* Top Footer: Logo, Bio, Navigation */}
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/Logo.png" alt="Alfaiataria Logo" className="footer-logo" />
            <p className="footer-bio">
              A Arte da Elegância Sob Medida. Elevando o padrão da alfaiataria masculina com tradição, exclusividade e precisão.
            </p>
          </div>
          
          <div className="footer-links-group">
            <div className="footer-links">
              <h3>Empresa</h3>
              <ul>
                <li><a href="#sobre">Nossa História</a></li>
                <li><a href="#colecao">A Coleção</a></li>
                <li><a href="#tendencias">Tendências</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h3>Suporte</h3>
              <ul>
                <li><a href="#faq">Central de Ajuda</a></li>
                <li><a href="#localizacao">Localização</a></li>
                <li><a href="#contato">Fale Conosco</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-divider"></div>

        {/* Mid Footer: Newsletter & Socials */}
        <div className="footer-mid">
          <div className="footer-newsletter">
            <h3>Assine nossa Newsletter</h3>
            <p>Receba convites para novas coleções e dicas de estilo.</p>

            {newsletterStatus === 'success' ? (
              <p className="newsletter-success">Inscrição confirmada. Obrigado!</p>
            ) : (
              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  required
                  disabled={newsletterStatus === 'sending'}
                />
                <button type="submit" disabled={newsletterStatus === 'sending'}>
                  {newsletterStatus === 'sending' ? '...' : 'Assinar'}
                </button>
              </form>
            )}
          </div>
          
          <div className="footer-social">
            <h3>Conecte-se</h3>
            <div className="social-links">
              <a href="https://instagram.com/alfaiatariabespoke" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
              <a href="https://facebook.com/alfaiatariabespoke" target="_blank" rel="noopener noreferrer" aria-label="Facebook">FB</a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">WA</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Footer: Legal & Security */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Alfaiataria Bespoke. Todos os direitos reservados.</p>
            <div className="legal-links">
              <a href="#">Termos de Uso</a>
              <span className="dot">•</span>
              <a href="#">Política de Privacidade</a>
            </div>
          </div>
          
          <div className="footer-security">
            {/* SVG Security Seals (Placeholders for SSL/Safe Browsing) */}
            <div className="seal" title="SSL Secured">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>SSL Seguro</span>
            </div>
            <div className="seal" title="Verified Safe">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
              <span>Site Verificado</span>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;


