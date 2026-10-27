import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const translations = {
    pt: {
      title: 'Vamos criar algo juntos.',
      description:
        'Obrigado por visitares o meu portefólio. Sente-te à vontade para entrar em contacto!',
      copyright: 'Todos os direitos reservados.',
    },
    en: {
      title: "Let's build something together.",
      description:
        'Thanks for visiting my portfolio. Feel free to connect with me!',
      copyright: 'All rights reserved.',
    },
  };

  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>{t.title}</h2>

          <p>{t.description}</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/GJTMonteiro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub">
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gjtmonteiro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/GJTMonteiro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)">
            <FaXTwitter />
          </a>
        </div>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Guilherme Monteiro. {t.copyright}
      </p>
    </footer>
  );
};

export default Footer;
