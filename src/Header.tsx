import { useState } from 'react';
import { useLanguage } from './LanguageContext';

const Header = () => {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const translations = {
    pt: {
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contactos',
      menu: 'Abrir menu',
      closeMenu: 'Fechar menu',
    },
    en: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      menu: 'Open menu',
      closeMenu: 'Close menu',
    },
  };

  const t = translations[language];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a
          href="#home"
          className="logo"
          aria-label="GJTMONTEIRO - Início"
          onClick={closeMenu}>
          GJTMONTEIRO
        </a>

        <button
          type="button"
          className={`burger-menu ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t.closeMenu : t.menu}
          aria-expanded={menuOpen}
          aria-controls="main-navigation">
          <span />
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={`navbar ${menuOpen ? 'menu-open' : ''}`}
          aria-label={
            language === 'pt' ? 'Navegação principal' : 'Main navigation'
          }>
          <a href="#about" onClick={closeMenu}>
            {t.about}
          </a>

          <a href="#projects" onClick={closeMenu}>
            {t.projects}
          </a>

          <a href="#contact" onClick={closeMenu}>
            {t.contact}
          </a>
        </nav>

        <div className="language-selector">
          <button
            type="button"
            className={language === 'pt' ? 'active' : ''}
            onClick={() => {
              setLanguage('pt');
              closeMenu();
            }}
            aria-label="Mudar idioma para português"
            aria-pressed={language === 'pt'}>
            PT
          </button>

          <span className="language-divider">|</span>

          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => {
              setLanguage('en');
              closeMenu();
            }}
            aria-label="Switch language to English"
            aria-pressed={language === 'en'}>
            EN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
