import { useLanguage } from './LanguageContext';

const Header = () => {
  const { language, setLanguage } = useLanguage();

  const translations = {
    pt: {
      about: 'Sobre',
      projects: 'Projetos',
      contact: 'Contactos',
    },
    en: {
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
  };

  const t = translations[language];

  return (
    <header className="header">
      <div className="header-container">
        <a href="#home" className="logo" aria-label="GJTMONTEIRO - Início">
          GJTMONTEIRO
        </a>

        <nav className="navbar" aria-label="Navegação principal">
          <a href="#about">{t.about}</a>
          <a href="#projects">{t.projects}</a>
          <a href="#contact">{t.contact}</a>
        </nav>

        <div className="language-selector">
          <button
            type="button"
            className={language === 'pt' ? 'active' : ''}
            onClick={() => setLanguage('pt')}
            aria-label="Mudar idioma para português"
            aria-pressed={language === 'pt'}>
            PT
          </button>

          <span className="language-divider">|</span>

          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
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
