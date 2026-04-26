import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Coleção', href: '#colecao' },
    { name: 'Tendências', href: '#tendencias' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Localização', href: '#localizacao' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Menu principal">
      <div className="navbar-container">
        <a href="#inicio" className="navbar-logo" aria-label="Ir ao início">
          <img src="/Logo.png" alt="Alfaiataria Bespoke" />
        </a>

        <div className="desktop-menu">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="#contato" className="nav-cta">Agende</a>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} color="#D4AF37" /> : <Menu size={28} color="#D4AF37" />}
        </button>
      </div>

      {/* Mobile overlay backdrop */}
      {mobileMenuOpen && (
        <div className="mobile-overlay" onClick={handleLinkClick} />
      )}

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contato"
          className="mobile-nav-cta"
          onClick={handleLinkClick}
        >
          Agendar Consulta
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
